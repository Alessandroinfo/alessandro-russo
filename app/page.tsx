'use client'
import React from 'react';
import Quote from '../app/components/quote';
import EmailCopy from '@/app/components/email-copy';
import Contacts from '@/app/components/contacts';

export default function Home() {
    return (
        <>
            <div className="w-full relative flex flex-col antialiased">
            <div className="z-10 background top-0 absolute w-full h-full">
                <div className="w-full h-full" id="particles-js"></div>
            </div>

            <div
                className="z-10 text-white flex lg:flex-row md:px-64 bg-teal-10 border-b border-teal-20 shadow-inner">
                <div className="flex flex-grow">
                    <div
                        className="flex items-center flex-grow md:flex-grow-0 justify-around sm:px-10 *:px-8 md:*:px-8 *:h-24 hover:*:bg-teal-900 *:flex *:items-center *:justify-center">
                        <EmailCopy/>
                        <a aria-label="Instagram" href="https://www.instagram.com/alerussohere/">
                    <span>
                      <svg className="h-10 w-10" id="Livello_1" version="1.1" viewBox="0 0 24 24"
                           x="0px" xmlns="http://www.w3.org/2000/svg"
                           y="0px">
                          <g fill="none" fill-rule="evenodd" stroke="none" stroke-width="1">
                                    <g fill="#FFFFFF" fill-rule="nonzero" transform="translate(-90.000000, -70.000000)">
                                        <g transform="translate(90.000000, 70.000000)">
            <path className="st0" d="M12,0C8.7,0,8.3,0,7.1,0.1C5.8,0.1,4.9,0.3,4.1,0.6C3.4,0.9,2.7,1.3,2,2S0.9,3.3,0.6,4.1
            	C0.3,4.9,0.1,5.8,0.1,7.1C0,8.3,0,8.7,0,12s0,3.7,0.1,4.9c0.1,1.3,0.3,2.1,0.6,2.9C0.9,20.6,1.3,21.3,2,22c0.7,0.7,1.3,1.1,2.1,1.4
            	c0.8,0.3,1.6,0.5,2.9,0.6C8.3,24,8.7,24,12,24s3.7,0,4.9-0.1c1.3-0.1,2.1-0.3,2.9-0.6c0.8-0.3,1.5-0.7,2.1-1.4
            	c0.7-0.7,1.1-1.3,1.4-2.1c0.3-0.8,0.5-1.6,0.6-2.9C24,15.7,24,15.3,24,12s0-3.7-0.1-4.9c-0.1-1.3-0.3-2.1-0.6-2.9
            	C23.1,3.4,22.7,2.7,22,2c-0.7-0.7-1.3-1.1-2.1-1.4c-0.8-0.3-1.6-0.5-2.9-0.6C15.7,0,15.3,0,12,0z M12,2.2c3.2,0,3.6,0,4.9,0.1
            	c1.2,0.1,1.8,0.2,2.2,0.4c0.6,0.2,1,0.5,1.4,0.9c0.4,0.4,0.7,0.8,0.9,1.4c0.2,0.4,0.4,1.1,0.4,2.2c0.1,1.3,0.1,1.6,0.1,4.8
            	s0,3.6-0.1,4.9c-0.1,1.2-0.3,1.8-0.4,2.2c-0.2,0.6-0.5,1-0.9,1.4c-0.4,0.4-0.8,0.7-1.4,0.9c-0.4,0.2-1.1,0.4-2.2,0.4
            	c-1.3,0.1-1.6,0.1-4.9,0.1c-3.2,0-3.6,0-4.9-0.1c-1.2-0.1-1.8-0.3-2.2-0.4c-0.6-0.2-1-0.5-1.4-0.9c-0.4-0.4-0.7-0.8-0.9-1.4
            	c-0.2-0.4-0.4-1.1-0.4-2.2c0-1.3-0.1-1.6-0.1-4.8c0-3.2,0-3.6,0.1-4.9C2.2,6,2.4,5.3,2.6,4.9c0.2-0.6,0.5-1,0.9-1.4
            	c0.4-0.4,0.8-0.7,1.4-0.9c0.4-0.2,1.1-0.4,2.2-0.4C8.4,2.1,8.7,2.1,12,2.2C12,2.1,12,2.2,12,2.2z M12,5.8c-3.4,0-6.2,2.8-6.2,6.2
            	c0,3.4,2.8,6.2,6.2,6.2c3.4,0,6.2-2.8,6.2-6.2C18.2,8.6,15.4,5.8,12,5.8z M12,16c-2.2,0-4-1.8-4-4s1.8-4,4-4s4,1.8,4,4
            	S14.2,16,12,16z M19.8,5.6c0,0.8-0.6,1.4-1.4,1.4C17.6,7,17,6.4,17,5.6s0.6-1.4,1.4-1.4C19.2,4.2,19.8,4.8,19.8,5.6z"/>
                                        </g></g></g>
                      </svg>
                    </span>
                        </a>
                        <a aria-label="Facebook" href="https://www.facebook.com/alessandro.russo.ar">
                    <span>
            <svg className="h-10 w-10" version="1.1" viewBox="0 0 24 24"

                 xmlns="http://www.w3.org/2000/svg"
            >
            <g fill="none" fill-rule="evenodd" stroke="none" stroke-width="1">
                                    <g fill="#FFFFFF" fill-rule="nonzero" transform="translate(-90.000000, -70.000000)">
                                        <g transform="translate(90.000000, 70.000000)">
            <path d="M24,12c0-6.6-5.4-12-12-12C5.4,0,0,5.4,0,12c0,6,4.4,11,10.1,11.9v-8.4h-3V12h3V9.4c0-3,1.8-4.7,4.5-4.7
            	c1.3,0,2.7,0.2,2.7,0.2v3h-1.5c-1.5,0-2,0.9-2,1.9V12h3.3l-0.5,3.5h-2.8v8.4C19.6,23,24,18,24,12z"/>
            	</g></g></g>
            </svg>
                    </span>
                        </a>
                        <a aria-label="Github" href="https://github.com/Alessandroinfo">
                    <span>
            <svg className="h-10 w-10" version="1.1" viewBox="0 0 24 24"

                 xmlns="http://www.w3.org/2000/svg"
            >
            <g fill="none" fill-rule="evenodd" stroke="none" stroke-width="1">
                                    <g fill="#FFFFFF" fill-rule="nonzero" transform="translate(-90.000000, -70.000000)">
                                        <g transform="translate(90.000000, 70.000000)">
            <path d="M12,0.3c-6.6,0-12,5.4-12,12c0,5.3,3.4,9.8,8.2,11.4C8.8,23.8,9,23.4,9,23.1c0-0.3,0-1,0-2
            	c-3.3,0.7-4-1.6-4-1.6c-0.5-1.4-1.3-1.8-1.3-1.8C2.5,17,3.7,17,3.7,17c1.2,0.1,1.8,1.2,1.8,1.2c1.1,1.8,2.8,1.3,3.5,1
            	c0.1-0.8,0.4-1.3,0.8-1.6c-2.7-0.3-5.5-1.3-5.5-5.9c0-1.3,0.5-2.4,1.2-3.2C5.4,8.1,5,6.9,5.7,5.3c0,0,1-0.3,3.3,1.2
            	c1-0.3,2-0.4,3-0.4c1,0,2,0.1,3,0.4c2.3-1.6,3.3-1.2,3.3-1.2c0.6,1.7,0.2,2.9,0.1,3.2c0.8,0.8,1.2,1.9,1.2,3.2
            	c0,4.6-2.8,5.6-5.5,5.9c0.4,0.4,0.8,1.1,0.8,2.2c0,1.6,0,2.9,0,3.3c0,0.3,0.2,0.7,0.8,0.6c4.8-1.6,8.2-6.1,8.2-11.4
            	C24,5.7,18.6,0.3,12,0.3"/>
            	</g></g></g>
            </svg>

                    </span>
                        </a>
                        <a aria-label="Stackoverflow" href="https://stackoverflow.com/users/2893733/ale-info">
                    <span>
            <svg className="h-10 w-10" version="1.1" viewBox="0 0 24 24"

                 xmlns="http://www.w3.org/2000/svg"
            >
            <g fill="none" fill-rule="evenodd" stroke="none" stroke-width="1">
                                    <g fill="#FFFFFF" fill-rule="nonzero" transform="translate(-90.000000, -70.000000)">
                                        <g transform="translate(90.000000, 70.000000)">
            <path className="st0" d="M19,21.9v-6.4h2.1V24H1.8v-8.5H4v6.4H19z M6.1,19.7h10.7v-2.1H6.1C6.1,17.6,6.1,19.7,6.1,19.7z M6.4,14.9
            	l10.5,2.2l0.5-2.1L6.8,12.8C6.8,12.8,6.4,14.9,6.4,14.9z M7.7,9.8l9.7,4.5l0.9-1.9L8.6,7.9L7.7,9.8C7.7,9.8,7.7,9.8,7.7,9.8z
            	 M10.4,5l8.2,6.9l1.4-1.6l-8.2-6.9L10.4,5C10.5,5,10.4,5,10.4,5z M15.8,0L14,1.3l6.4,8.6l1.7-1.3L15.8,0C15.7,0,15.8,0,15.8,0z"/>
            	</g></g></g>
            </svg>

                    </span>
                        </a>
                        <a aria-label="LinkedIN" href="https://linkedin.com/in/alessandrorusso-in">
                    <span>
            <svg className="h-10 w-10" version="1.1" viewBox="0 0 24 24"

                 xmlns="http://www.w3.org/2000/svg"
            >
            <g fill="none" fill-rule="evenodd" stroke="none" stroke-width="1">
                                    <g fill="#FFFFFF" fill-rule="nonzero" transform="translate(-90.000000, -70.000000)">
                                        <g transform="translate(90.000000, 70.000000)">
            <path d="M20.4,20.5h-3.6v-5.6c0-1.3,0-3-1.9-3s-2.1,1.4-2.1,2.9v5.7H9.4V9h3.4v1.6l0,0c0.5-0.9,1.6-1.9,3.4-1.9
            	c3.6,0,4.3,2.4,4.3,5.5L20.4,20.5L20.4,20.5z M5.3,7.4c-1.1,0-2.1-0.9-2.1-2.1c0-1.1,0.9-2.1,2.1-2.1c1.1,0,2.1,0.9,2.1,2.1
            	S6.5,7.4,5.3,7.4z M7.1,20.5H3.6V9h3.6L7.1,20.5L7.1,20.5z M22.2,0H1.8C0.8,0,0,0.8,0,1.7v20.5c0,1,0.8,1.7,1.8,1.7h20.5
            	c1,0,1.8-0.8,1.8-1.7V1.7C24,0.8,23.2,0,22.2,0L22.2,0z"/></g></g></g>
            </svg>

                    </span>
                        </a>
                    </div>
                </div>
            </div>

            <div className="z-10 text-white min-h-screen pt-24 box-border pb-42 flex flex-col justify-center">
                <div className="flex flex-col mt-auto justify-center h-full">
                    <div className="px-16 flex text-xs flex-col lg:pl-40 lg:block">
                        <h1 className="font-hairline leading-none">
                            Alessandro Russo
                            <br/>
                            <span className="text-teal-400">Front-End Architect</span>
                            <span>/</span>
                            <span className="text-teal-400">Full-Stack developer</span>
                            <br/>
                        </h1>
                        <h2 className="mt-8 font-hairline leading-none">
                            Source of <span className="text-teal-400">inspiration</span>
                            and <span className="text-teal-400">motivation</span>.
                        </h2>
                    </div>
                </div>

                <div className="mt-auto min-h-16">
                    <Quote/>
                </div>
            </div>
        </div>
            <Contacts/>
        </>
    );
}
