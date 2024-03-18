'use client'
import ContactForm from '../../components/ContactForm';
import Link from 'next/link';

export default function Contact(){
    return(
    <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4 text-center">Contact Us</h2>
        <ContactForm />
    </div>
    )
}