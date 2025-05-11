import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";
import { 
  Form, 
  FormControl, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Calendar, Clock, Users, MessageSquare, CheckCircle } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().min(10, { message: "Please enter a valid phone number." }),
  guests: z.string().min(1, { message: "Please select number of guests." }),
  date: z.string().min(1, { message: "Please select a date." }),
  time: z.string().min(1, { message: "Please select a time." }),
  special: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

export default function Reservation() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      guests: "2",
      date: "",
      time: "",
      special: "",
    },
  });

  function onSubmit(data: FormValues) {
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      toast({
        title: "Reservation Confirmed!",
        description: "Your table has been reserved. We look forward to seeing you!",
      });
    }, 1500);
  }

  // Get today's date for the date input min attribute
  const today = new Date().toISOString().split('T')[0];

  return (
    <section id="reservation" className="py-20 bg-gradient-to-b from-accent/50 to-accent relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute -top-24 left-1/4 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-12 right-12 w-64 h-64 bg-secondary/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1 bg-primary/5 rounded-full text-primary font-medium text-sm mb-4">
            Reserve Your Experience
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            Book Your Table
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Secure your dining experience at Savoria. For parties larger than 8, please call us directly.
          </p>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-5">
              {/* Left side image and info - takes 2/5 of space on desktop */}
              <div className="col-span-2 bg-primary p-8 text-white relative">
                <div className="h-full flex flex-col justify-between">
                  <div>
                    <h3 className="font-display text-2xl font-bold mb-6">Dining Hours</h3>
                    <ul className="space-y-4">
                      <li className="flex items-center">
                        <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center mr-3">
                          <Clock className="w-4 h-4" />
                        </div>
                        <div>
                          <p className="font-medium">Monday - Thursday</p>
                          <p className="text-sm text-white/70">5:00 PM - 10:00 PM</p>
                        </div>
                      </li>
                      <li className="flex items-center">
                        <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center mr-3">
                          <Clock className="w-4 h-4" />
                        </div>
                        <div>
                          <p className="font-medium">Friday - Saturday</p>
                          <p className="text-sm text-white/70">5:00 PM - 11:00 PM</p>
                        </div>
                      </li>
                      <li className="flex items-center">
                        <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center mr-3">
                          <Clock className="w-4 h-4" />
                        </div>
                        <div>
                          <p className="font-medium">Sunday</p>
                          <p className="text-sm text-white/70">5:00 PM - 9:00 PM</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="mt-8">
                    <p className="text-white/80 text-sm mb-3">Need assistance?</p>
                    <p className="font-medium">(555) 123-4567</p>
                    <p className="text-white/80 text-sm">reservations@savoria.com</p>
                  </div>
                </div>
                
                {/* Decorative element */}
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-secondary/20 rounded-full"></div>
              </div>
              
              {/* Right side form - takes 3/5 of space on desktop */}
              <div className="col-span-3 p-8 md:p-10">
                {isSubmitted ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="h-full flex flex-col items-center justify-center text-center px-6 py-10"
                  >
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                      <CheckCircle className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="font-display text-2xl font-bold mb-3">Reservation Confirmed!</h3>
                    <p className="text-gray-600 mb-6">
                      Thank you for your reservation. We have sent a confirmation to your email.
                    </p>
                    <Button 
                      variant="outline" 
                      className="border-secondary text-secondary hover:bg-secondary hover:text-white"
                      onClick={() => {
                        setIsSubmitted(false);
                        form.reset();
                      }}
                    >
                      Make Another Reservation
                    </Button>
                  </motion.div>
                ) : (
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="flex items-center text-sm font-medium text-gray-700">
                              <span className="mr-2">Full Name</span>
                              <span className="text-red-500">*</span>
                            </FormLabel>
                            <FormControl>
                              <Input 
                                {...field} 
                                className="px-4 py-2 border border-gray-200 rounded-md focus:ring-2 focus:ring-secondary focus:border-secondary transition-all duration-300" 
                                placeholder="Your full name"
                              />
                            </FormControl>
                            <FormMessage className="text-xs" />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="flex items-center text-sm font-medium text-gray-700">
                              <span className="mr-2">Email Address</span>
                              <span className="text-red-500">*</span>
                            </FormLabel>
                            <FormControl>
                              <Input 
                                {...field} 
                                type="email" 
                                className="px-4 py-2 border border-gray-200 rounded-md focus:ring-2 focus:ring-secondary focus:border-secondary transition-all duration-300" 
                                placeholder="your.email@example.com"
                              />
                            </FormControl>
                            <FormMessage className="text-xs" />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="flex items-center text-sm font-medium text-gray-700">
                              <span className="mr-2">Phone Number</span>
                              <span className="text-red-500">*</span>
                            </FormLabel>
                            <FormControl>
                              <div className="relative">
                                <div className="absolute left-0 inset-y-0 flex items-center pl-3 pointer-events-none text-gray-400">
                                  <span>+1</span>
                                </div>
                                <Input 
                                  {...field} 
                                  type="tel" 
                                  className="px-4 py-2 pl-10 border border-gray-200 rounded-md focus:ring-2 focus:ring-secondary focus:border-secondary transition-all duration-300" 
                                  placeholder="(555) 123-4567"
                                />
                              </div>
                            </FormControl>
                            <FormMessage className="text-xs" />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="guests"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="flex items-center text-sm font-medium text-gray-700">
                              <span className="mr-2">Number of Guests</span>
                              <span className="text-red-500">*</span>
                            </FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger className="px-4 py-2 h-10 border border-gray-200 rounded-md focus:ring-2 focus:ring-secondary focus:border-secondary transition-all duration-300">
                                  <div className="flex items-center">
                                    <Users className="w-4 h-4 mr-2 text-gray-500" />
                                    <SelectValue placeholder="Select guests" />
                                  </div>
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {[...Array(8)].map((_, i) => (
                                  <SelectItem key={i+1} value={(i+1).toString()}>
                                    {i+1} {i === 0 ? 'Person' : 'People'}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormMessage className="text-xs" />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="date"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="flex items-center text-sm font-medium text-gray-700">
                              <span className="mr-2">Date</span>
                              <span className="text-red-500">*</span>
                            </FormLabel>
                            <FormControl>
                              <div className="relative">
                                <div className="absolute left-0 inset-y-0 flex items-center pl-3 pointer-events-none text-gray-500">
                                  <Calendar className="w-4 h-4" />
                                </div>
                                <Input 
                                  {...field} 
                                  type="date" 
                                  min={today}
                                  className="px-4 py-2 pl-10 border border-gray-200 rounded-md focus:ring-2 focus:ring-secondary focus:border-secondary transition-all duration-300" 
                                />
                              </div>
                            </FormControl>
                            <FormMessage className="text-xs" />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="time"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="flex items-center text-sm font-medium text-gray-700">
                              <span className="mr-2">Time</span>
                              <span className="text-red-500">*</span>
                            </FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger className="px-4 py-2 h-10 border border-gray-200 rounded-md focus:ring-2 focus:ring-secondary focus:border-secondary transition-all duration-300">
                                  <div className="flex items-center">
                                    <Clock className="w-4 h-4 mr-2 text-gray-500" />
                                    <SelectValue placeholder="Select time" />
                                  </div>
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {["17:00", "17:30", "18:00", "18:30", "19:00", "19:30", "20:00", "20:30", "21:00"].map((time) => {
                                  const hour = parseInt(time.split(":")[0]);
                                  const minute = time.split(":")[1];
                                  const displayTime = `${hour > 12 ? hour - 12 : hour}:${minute} ${hour >= 12 ? 'PM' : 'AM'}`;
                                  
                                  return (
                                    <SelectItem key={time} value={time}>
                                      {displayTime}
                                    </SelectItem>
                                  );
                                })}
                              </SelectContent>
                            </Select>
                            <FormMessage className="text-xs" />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="special"
                        render={({ field }) => (
                          <FormItem className="md:col-span-2">
                            <FormLabel className="flex items-center text-sm font-medium text-gray-700">
                              <span className="mr-2">Special Requests</span>
                              <span className="text-gray-400 text-xs">(Optional)</span>
                            </FormLabel>
                            <FormControl>
                              <div className="relative">
                                <div className="absolute left-0 top-3 flex items-center pl-3 pointer-events-none text-gray-500">
                                  <MessageSquare className="w-4 h-4" />
                                </div>
                                <Textarea 
                                  {...field} 
                                  rows={3} 
                                  className="px-4 py-2 pl-10 border border-gray-200 rounded-md focus:ring-2 focus:ring-secondary focus:border-secondary transition-all duration-300" 
                                  placeholder="Dietary preferences, special occasion, seating preferences, etc."
                                />
                              </div>
                            </FormControl>
                            <FormMessage className="text-xs" />
                          </FormItem>
                        )}
                      />
                      
                      <div className="md:col-span-2 mt-4">
                        <motion.div
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <Button 
                            type="submit" 
                            className="w-full bg-secondary text-white px-6 py-3 h-auto rounded-md font-medium hover:bg-secondary/90 transition-all duration-300 shadow-md hover:shadow-lg"
                            disabled={isSubmitting}
                          >
                            {isSubmitting ? (
                              <div className="flex items-center justify-center">
                                <div className="w-5 h-5 border-t-2 border-b-2 border-white rounded-full animate-spin mr-2"></div>
                                Processing...
                              </div>
                            ) : (
                              'Reserve Table'
                            )}
                          </Button>
                        </motion.div>
                        <p className="text-center text-gray-500 text-xs mt-4">
                          By making a reservation, you agree to our reservation policy.
                        </p>
                      </div>
                    </form>
                  </Form>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
