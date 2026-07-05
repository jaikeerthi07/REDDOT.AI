import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { trpc } from "@/lib/trpc";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";
import { CalendarIcon, Clock, Loader2, Send } from "lucide-react";
import { cn } from "@/lib/utils";

export default function BookingModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [selectedTime, setSelectedTime] = useState<string>("");

  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<{
    name: string;
    email: string;
    company: string;
    phone: string;
    serviceType: string;
    notes: string;
  }>();

  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener("open-booking", handleOpen);
    return () => window.removeEventListener("open-booking", handleOpen);
  }, []);

  const timeSlots = [
    "09:00 AM – 09:30 AM",
    "10:00 AM – 10:30 AM",
    "11:00 AM – 11:30 AM",
    "01:00 PM – 01:30 PM",
    "02:00 PM – 02:30 PM",
    "03:00 PM – 03:30 PM",
    "04:00 PM – 04:30 PM",
    "05:00 PM – 05:30 PM",
  ];

  const onSubmit = (data: any) => {
    if (!selectedDate) {
      toast.error("Date selection required", {
        description: "Please select a preferred date for the consultation.",
      });
      return;
    }
    if (!selectedTime) {
      toast.error("Time slot required", {
        description: "Please select a preferred time slot.",
      });
      return;
    }

    setIsSubmitting(true);

    const formDataToSend = new URLSearchParams();
    formDataToSend.append("entry.544761981", data.name);
    formDataToSend.append("entry.861078337", data.email);
    formDataToSend.append("entry.1682830426", data.company || "");
    formDataToSend.append("entry.2106101138", data.phone || "");
    formDataToSend.append("entry.773058063", data.serviceType);

    // Google Forms date format is YYYY-MM-DD
    formDataToSend.append(
      "entry.1916305959",
      format(selectedDate, "yyyy-MM-dd")
    );
    formDataToSend.append("entry.579926705", selectedTime);
    formDataToSend.append("entry.388765444", data.notes || "");

    fetch(
      "https://docs.google.com/forms/d/e/1FAIpQLSfLADz8yRCS3KIqA_NE_POhZ-9siMMHJE2nRBLVT-03do7LJw/formResponse",
      {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: formDataToSend.toString(),
      }
    )
      .then(() => {
        toast.success("Consultation Booked!", {
          description: "Your booking has been successfully requested.",
          duration: 5000,
        });
        reset();
        setSelectedDate(undefined);
        setSelectedTime("");
        setIsOpen(false);
      })
      .catch(() => {
        toast.error("Booking failed", {
          description: "Please try again later.",
        });
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="max-w-xl w-[95vw] rounded-2xl bg-slate-900 border border-slate-800 text-white max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Schedule a Consultation
          </DialogTitle>
          <DialogDescription className="text-slate-400 text-center text-sm">
            Book a 30-minute strategic AI discovery session with our executive
            architects.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mt-2">
          {/* Grid fields */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                Full Name <span className="text-red-500">*</span>
              </label>
              <Input
                {...register("name", { required: "Name is required" })}
                placeholder="John Smith"
                className="bg-slate-950 border-slate-800 text-white placeholder-slate-600 focus-visible:ring-blue-500"
              />
              {errors.name && (
                <p className="text-red-500 text-[10px] mt-0.5">
                  {errors.name.message}
                </p>
              )}
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                Email Address <span className="text-red-500">*</span>
              </label>
              <Input
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email",
                  },
                })}
                type="email"
                placeholder="john@company.com"
                className="bg-slate-950 border-slate-800 text-white placeholder-slate-600 focus-visible:ring-blue-500"
              />
              {errors.email && (
                <p className="text-red-500 text-[10px] mt-0.5">
                  {errors.email.message}
                </p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                Company
              </label>
              <Input
                {...register("company")}
                placeholder="Your Enterprise"
                className="bg-slate-950 border-slate-800 text-white placeholder-slate-600 focus-visible:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                Phone Number
              </label>
              <Input
                {...register("phone")}
                placeholder="+1 (555) 000-0000"
                className="bg-slate-950 border-slate-800 text-white placeholder-slate-600 focus-visible:ring-blue-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1.5">
              Service Type <span className="text-red-500">*</span>
            </label>
            <select
              {...register("serviceType", {
                required: "Please select a service",
              })}
              className="w-full h-9 rounded-md px-3 py-1 bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">Select an Offering...</option>
              <option value="AI Agent Development">AI Agent Development</option>
              <option value="AI/ML Development">AI/ML Development</option>
              <option value="Generative AI Solutions">
                Generative AI Solutions
              </option>
              <option value="Web Development">Web Development</option>
              <option value="Cybersecurity Solutions">
                Cybersecurity Solutions
              </option>
              <option value="Embedded Systems & IoT">
                Embedded Systems & IoT
              </option>
              <option value="Other">Other Technology Needs</option>
            </select>
            {errors.serviceType && (
              <p className="text-red-500 text-[10px] mt-0.5">
                {errors.serviceType.message}
              </p>
            )}
          </div>

          {/* Date & Time selection */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                Preferred Date <span className="text-red-500">*</span>
              </label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full justify-start text-left font-normal bg-slate-950 border-slate-800 text-slate-300 hover:bg-slate-950 hover:text-white",
                      !selectedDate && "text-slate-500"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {selectedDate ? (
                      format(selectedDate, "PPP")
                    ) : (
                      <span>Pick a date</span>
                    )}
                  </Button>
                </PopoverTrigger>
                <PopoverContent
                  className="w-auto p-0 bg-slate-950 border border-slate-800"
                  align="start"
                >
                  <Calendar
                    mode="single"
                    selected={selectedDate}
                    onSelect={setSelectedDate}
                    disabled={date =>
                      date < new Date(new Date().setHours(0, 0, 0, 0))
                    }
                    className="rounded-md border-0 bg-slate-950 text-white"
                  />
                </PopoverContent>
              </Popover>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                Preferred Time Slot <span className="text-red-500">*</span>
              </label>
              <div className="grid grid-cols-2 gap-1.5 max-h-[110px] overflow-y-auto p-1 bg-slate-950 border border-slate-800 rounded-md">
                {timeSlots.map(time => (
                  <button
                    key={time}
                    type="button"
                    onClick={() => setSelectedTime(time)}
                    className={cn(
                      "px-2 py-1.5 rounded text-[11px] font-medium border transition-colors flex items-center justify-center gap-1",
                      selectedTime === time
                        ? "bg-blue-600 border-blue-500 text-white"
                        : "bg-slate-900 border-slate-800 text-slate-400 hover:border-blue-600 hover:text-white"
                    )}
                  >
                    <Clock size={10} />
                    {time}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1.5">
              Project Scope / Notes
            </label>
            <Textarea
              {...register("notes")}
              placeholder="Tell us briefly about your goals, timelines, or technical requirements..."
              rows={3}
              className="bg-slate-950 border-slate-800 text-white placeholder-slate-600 focus-visible:ring-blue-500 resize-none text-xs"
            />
          </div>

          <DialogFooter className="pt-2">
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg hover:shadow-blue-600/50 py-2.5 font-semibold rounded-lg transition-all duration-300 flex items-center justify-center gap-2 text-sm"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Booking Consultation...
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  Confirm Request
                </>
              )}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
