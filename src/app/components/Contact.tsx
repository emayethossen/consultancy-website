"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import dynamic from "next/dynamic"
import animationData from '../../assets/animation.json'

// Dynamically import Lottie with SSR disabled
const Lottie = dynamic(() => import('react-lottie'), { ssr: false });

// Define your Zod schema for form validation
const formSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Invalid email address"),
    message: z.string().min(10, "Message must be at least 10 characters"),
})

export function ContactForm() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            message: "",
        },
    })

    // Handle form submission
    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values) // You can replace this with an actual API call
    }

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        },
    };

    return (
        <section id="contact" className="py-8 md:py-16 px-6 sm:px-12 md:px-[72px] bg-gray-50">
            <div className="container mx-auto">
                <div className="">
                    <div className="text-center md:text-left mb-12">

                        <h2 className="text-emerald-500 text-lg font-bold mb-6">CONTACT US</h2>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#04004D] mb-4">
                            Get in Touch
                        </h2>
                        <p className="text-lg sm:text-xl text-gray-600">
                            Take the first step towards your international future
                        </p>
                    </div>

                    {/* Form with React Hook Form */}
                    <div className="grid md:grid-cols-2 gap-8">

                        <div className="md:order-last bg-[#E0F5EF] flex justify-end items-center rounded-xl">
                            <Lottie options={defaultOptions} height={300} width={300} />
                        </div>

                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                            {/* Name Field */}
                            <div>
                                <label htmlFor="name" className="block text-gray-700 font-medium">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    {...form.register("name")}
                                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                                    placeholder="Your name"
                                />
                                {form.formState.errors.name && (
                                    <p className="text-red-500 text-sm mt-1">{form.formState.errors.name.message}</p>
                                )}
                            </div>

                            {/* Email Field */}
                            <div>
                                <label htmlFor="email" className="block text-gray-700 font-medium">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    {...form.register("email")}
                                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                                    placeholder="your@email.com"
                                />
                                {form.formState.errors.email && (
                                    <p className="text-red-500 text-sm mt-1">{form.formState.errors.email.message}</p>
                                )}
                            </div>

                            {/* Message Field */}
                            <div>
                                <label htmlFor="message" className="block text-gray-700 font-medium">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    {...form.register("message")}
                                    className="w-full p-3 border border-gray-300 rounded-md min-h-[120px] focus:outline-none focus:ring-2 focus:ring-blue-600"
                                    placeholder="Tell us about your plans..."
                                />
                                {form.formState.errors.message && (
                                    <p className="text-red-500 text-sm mt-1">{form.formState.errors.message.message}</p>
                                )}
                            </div>

                            {/* Submit Button */}
                            <button
                                className="bg-[#00C389] w-full text-white font-bold hover:bg-teal-500 px-6 sm:px-8 py-3 rounded-full transition-transform transform hover:scale-105 focus:ring-4 focus:ring-teal-300"
                                aria-label="Get in Touch with Care2 Training Consultancy"
                            >
                                Send Message
                            </button>

                        </form>


                    </div>
                </div>
            </div>
        </section>
    )
}

