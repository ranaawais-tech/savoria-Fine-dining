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
    <section id="contact" className="py-20 bg-neutral">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-lg shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div 
              className="bg-cover bg-center h-96 lg:h-auto" 
              style={{ 
                backgroundImage: "url('https://images.unsplash.com/photo-1532452119098-a3650b3c46d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&h=800')" 
              }}
            ></div>
            
            <div className="p-8 md:p-12 lg:p-16">
              <h2 className="font-display text-3xl font-bold mb-6">Stay Connected</h2>
              <p className="text-gray-600 mb-8">
                Subscribe to our newsletter for exclusive offers, seasonal menu updates, and invitations to special events.
              </p>
              
              {isSubmitted ? (
                <div className="p-4 bg-green-100 text-green-800 rounded mb-12">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Thank you for subscribing to our newsletter!
                </div>
              ) : (
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 mb-12">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-medium text-gray-700">Name</FormLabel>
                          <FormControl>
                            <Input 
                              {...field} 
                              className="px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-secondary focus:border-secondary transition-all duration-300" 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-medium text-gray-700">Email Address</FormLabel>
                          <FormControl>
                            <Input 
                              {...field} 
                              type="email" 
                              className="px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-secondary focus:border-secondary transition-all duration-300" 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="privacy"
                      render={({ field }) => (
                        <FormItem className="flex items-start space-x-2 space-y-0">
                          <FormControl>
                            <Checkbox 
                              checked={field.value} 
                              onCheckedChange={field.onChange} 
                              className="mt-1 h-4 w-4 text-secondary focus:ring-secondary border-gray-300 rounded" 
                            />
                          </FormControl>
                          <FormLabel className="text-sm text-gray-600">
                            I agree to receive marketing communications from Savoria
                          </FormLabel>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <Button 
                      type="submit" 
                      className="w-full bg-secondary text-white px-6 py-3 h-auto rounded font-medium hover:bg-secondary/90 transition-all duration-300"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Subscribing...' : 'Subscribe'}
                    </Button>
                  </form>
                </Form>
              )}
              
              <div className="flex flex-col md:flex-row md:justify-between space-y-6 md:space-y-0">
                <div>
                  <h3 className="font-bold text-lg mb-3">Hours</h3>
                  <p className="text-gray-600 mb-1">Monday - Thursday: 5pm - 10pm</p>
                  <p className="text-gray-600 mb-1">Friday - Saturday: 5pm - 11pm</p>
                  <p className="text-gray-600">Sunday: 5pm - 9pm</p>
                </div>
                
                <div>
                  <h3 className="font-bold text-lg mb-3">Contact</h3>
                  <p className="text-gray-600 mb-1">123 Cuisine Street</p>
                  <p className="text-gray-600 mb-1">Foodville, CA 90210</p>
                  <p className="text-gray-600 mb-1">(555) 123-4567</p>
                  <p className="text-gray-600">info@savoria.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
