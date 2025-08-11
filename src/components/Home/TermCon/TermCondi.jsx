import React, { Component } from 'react'

export class TermCondi extends Component {
    render() {
        return (
            <>
                <div className='p-5'>
                    <h1 className='text-[1.1rem] sm:text-[1.5rem] md:text-2xl lg:text-2xl mx-3 text-wefront font-bold'>Important <span className='text-weback'> Terms & Conditions for Consumer</span></h1>
                    <hr className='text-wefront mx-3' />
                    <div className='p-3 pt-6'>
                        <h3 className='font-bold text-xl'>Remember When Buying Idol</h3>
                        <ul className='ml-4 list-disc text-xl text-justify'>
                            <li>🧱 Ensure the idol is made of <span className="font-bold">natural clay or soil</span>,
                                not plaster of Paris (PoP).
                            </li>
                            <li>✅ Check that it's <span className="font-bold">fully dissolvable in water</span> for safe
                                immersion.
                            </li>
                            <li>🌿 Prefer idols with <span
                                className="font-bold">natural paints or no paints at all</span>.
                            </li>
                            <li>📏 Choose the <span className="font-bold">right size</span> for your space and immersion
                                location.
                            </li>
                            <li>🎨 Support <span className="font-bold">local artisans</span> or NGOs promoting
                                eco-friendly practices.
                            </li>
                            <li>♻️ Ask if the packaging is <span
                                className="font-bold">biodegradable or recyclable</span>.
                            </li>
                            <li>🗓️ Buy early to avoid last-minute rush and ensure quality.</li>
                            <li>🙏 Remember the purpose: <span className="font-bold">respect nature and tradition together</span>.
                            </li>
                        </ul>

                    </div>
                </div>
            </>
        )
    }
}

export default TermCondi
