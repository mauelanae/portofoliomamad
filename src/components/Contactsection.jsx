import React, { forwardRef, useState } from 'react';
import icon1 from '../assets/iconchat.svg';
import icontiktok from '../assets/icontiktok.svg';
import iconig from '../assets/iconig.svg';
import iconfb from '../assets/iconfb.svg';
import iconlind from '../assets/iconlind.svg';

const Contactsection = forwardRef((props, ref) => {
    const { profileRef } = ref;
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [isFormVisible, setIsFormVisible] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:3000/api/formportofolio', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });
            const data = await response.json();
            if (data.success) {
                alert('Form submitted successfully!');
                setFormData({ name: '', email: '', message: '' });
            } else {
                alert('Failed to submit form!');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('An error occurred while submitting the form.');
        }
    };

    const handleButtonClick = () => {
        setIsFormVisible(!isFormVisible); // Toggle form visibility
    };

    const handleClick = (url) => {
        window.open(url, '_blank');
    };

    return (
        <main>
            <section ref={profileRef} className="h-auto bg-black" id="profile">
                <div className="px-4 md:px-24 p-20">
                    <button className="flex space-x-10" onClick={handleButtonClick}>
                        <h1 className="text-9xl font-madesun text-[#FFDDAE]">Let's Talk</h1>
                        <img src={icon1} alt="chat icon" />
                    </button>
                    {isFormVisible && (
                        <form
                            className="bg-white p-8 rounded-md shadow-md mt-8"
                            onSubmit={handleSubmit}
                        >
                            <div className="mb-4">
                                <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-2 border rounded-md"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-2 border rounded-md"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="message" className="block text-gray-700 font-bold mb-2">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-2 border rounded-md"
                                    rows="4"
                                    required
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="bg-blue-500 text-white px-6 py-2 rounded-md"
                            >
                                Submit
                            </button>
                        </form>
                    )}
                    <div className="flex items-center justify-center space-x-16 mt-16">
                        <button
                            onClick={() =>
                                handleClick('https://www.tiktok.com/@achmaddddddddd?is_from_webapp=1&sender_device=pc')
                            }
                        >
                            <img src={icontiktok} alt="TikTok" />
                        </button>
                        <button onClick={() => handleClick('https://www.instagram.com/mauelanae_/')}>
                            <img src={iconig} alt="Instagram" />
                        </button>
                        <button onClick={() => handleClick('https://www.facebook.com/dwi.ahmad.9480')}>
                            <img src={iconfb} alt="Facebook" />
                        </button>
                        <button onClick={() => handleClick('https://www.linkedin.com/in/dwiachmadmaulana25/')}>
                            <img src={iconlind} alt="LinkedIn" />
                        </button>
                    </div>
                </div>
            </section>
        </main>
    );
});

Contactsection.displayName = 'Contactsection';
export default Contactsection;
