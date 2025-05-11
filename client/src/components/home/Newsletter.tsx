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
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Mail, CheckCircle, UserCheck, Clock, MapPin, Phone } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  privacy: z.boolean().refine(val => val === true, {
    message: "You must agree to receive marketing communications.",
  }),
});

type FormValues = z.infer<typeof formSchema>;

export default function Newsletter() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      privacy: false,
    },
  });

  function onSubmit(data: FormValues) {
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      toast({
        title: "Subscription Successful!",
        description: "Thank you for subscribing to our newsletter.",
      });
    }, 1500);
  }

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-neutral/50 to-neutral relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute -top-40 right-20 w-72 h-72 bg-accent/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 -left-20 w-64 h-64 bg-secondary/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1 bg-primary/5 rounded-full text-primary font-medium text-sm mb-4">
            Join Our Community
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            Stay Connected
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Subscribe to our newsletter for exclusive offers, seasonal menu updates, and invitations to special events.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative">
                <div 
                  className="absolute inset-0 bg-cover bg-center" 
                  style={{ 
                    backgroundImage: "url('https://images.unsplash.com/photo-1532452119098-a3650b3c46d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&h=800')" 
                  }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-transparent"></div>
                
                <div className="relative h-full flex flex-col justify-center p-8 md:p-12">
                  <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-white max-w-md">
                    <h3 className="font-display text-2xl font-bold mb-4">Why Subscribe?</h3>
                    
                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                          <CheckCircle className="w-4 h-4 text-accent" />
                        </div>
                        <p>Receive early access to seasonal menu changes and limited time offers</p>
                      </li>
                      <li className="flex items-start">
                        <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                          <CheckCircle className="w-4 h-4 text-accent" />
                        </div>
                        <p>Get invited to exclusive culinary events and chef's table experiences</p>
                      </li>
                      <li className="flex items-start">
                        <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                          <CheckCircle className="w-4 h-4 text-accent" />
                        </div>
                        <p>Special offers and promotions available only to our newsletter subscribers</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="p-8 md:p-12 lg:p-16">
                {isSubmitted ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="h-full flex flex-col items-center justify-center text-center p-6"
                  >
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                      <UserCheck className="w-10 h-10 text-green-600" />
                    </div>
                    <h3 className="font-display text-2xl font-bold mb-3 text-primary">Subscription Successful!</h3>
                    <p className="text-gray-600 mb-8 max-w-md">
                      Thank you for subscribing to our newsletter. We're excited to share our culinary journey with you!
                    </p>
                    <Button 
                      className="bg-secondary text-white hover:bg-secondary/90"
                      onClick={() => setIsSubmitted(false)}
                    >
                      Subscribe Another Email
                    </Button>
                  </motion.div>
                ) : (
                  <>
                    <Form {...form}>
                      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 mb-12">
                        <div className="flex items-center mb-6">
                          <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mr-4">
                            <Mail className="w-6 h-6 text-secondary" />
                          </div>
                          <h3 className="font-display text-2xl font-bold text-primary">Join Our Newsletter</h3>
                        </div>
                        
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-sm font-medium text-gray-700 flex items-center">
                                <span className="mr-2">Full Name</span>
                                <span className="text-red-500">*</span>
                              </FormLabel>
                              <FormControl>
                                <Input 
                                  {...field} 
                                  placeholder="Your name"
                                  className="px-4 py-3 h-12 border border-gray-200 rounded-md focus:ring-2 focus:ring-secondary focus:border-secondary transition-all duration-300" 
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
                              <FormLabel className="text-sm font-medium text-gray-700 flex items-center">
                                <span className="mr-2">Email Address</span>
                                <span className="text-red-500">*</span>
                              </FormLabel>
                              <FormControl>
                                <Input 
                                  {...field} 
                                  type="email" 
                                  placeholder="your.email@example.com"
                                  className="px-4 py-3 h-12 border border-gray-200 rounded-md focus:ring-2 focus:ring-secondary focus:border-secondary transition-all duration-300" 
                                />
                              </FormControl>
                              <FormMessage className="text-xs" />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="privacy"
                          render={({ field }) => (
                            <FormItem className="flex items-start space-x-3 space-y-0">
                              <FormControl>
                                <Checkbox 
                                  checked={field.value} 
                                  onCheckedChange={field.onChange} 
                                  className="mt-1 h-5 w-5 text-secondary focus:ring-secondary border-gray-300 rounded" 
                                />
                              </FormControl>
                              <div className="space-y-1">
                                <FormLabel className="text-sm text-gray-600">
                                  I agree to receive marketing communications from Savoria
                                </FormLabel>
                                <FormMessage className="text-xs" />
                              </div>
                            </FormItem>
                          )}
                        />
                        
                        <motion.div
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <Button 
                            type="submit" 
                            className="w-full bg-secondary text-white px-6 py-3 h-auto rounded-lg font-medium hover:bg-secondary/90 shadow-md hover:shadow-lg transition-all duration-300"
                            disabled={isSubmitting}
                          >
                            {isSubmitting ? (
                              <div className="flex items-center justify-center">
                                <div className="w-5 h-5 border-t-2 border-b-2 border-white rounded-full animate-spin mr-2"></div>
                                Subscribing...
                              </div>
                            ) : (
                              'Subscribe Now'
                            )}
                          </Button>
                        </motion.div>
                      </form>
                    </Form>
                    
                    <div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                        <div>
                          <div className="flex items-center mb-3">
                            <Clock className="w-5 h-5 text-secondary mr-2" />
                            <h4 className="font-bold text-lg text-primary">Hours</h4>
                          </div>
                          <ul className="space-y-1 text-gray-600">
                            <li className="text-sm">Monday - Thursday: 5pm - 10pm</li>
                            <li className="text-sm">Friday - Saturday: 5pm - 11pm</li>
                            <li className="text-sm">Sunday: 5pm - 9pm</li>
                          </ul>
                        </div>
                        
                        <div>
                          <div className="flex items-center mb-3">
                            <MapPin className="w-5 h-5 text-secondary mr-2" />
                            <h4 className="font-bold text-lg text-primary">Contact</h4>
                          </div>
                          <ul className="space-y-1 text-gray-600">
                            <li className="text-sm">123 Cuisine Street, Foodville</li>
                            <li className="text-sm flex items-center">
                              <Phone className="w-3 h-3 mr-1" />
                              <span>(555) 123-4567</span>
                            </li>
                            <li className="text-sm">info@savoria.com</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
