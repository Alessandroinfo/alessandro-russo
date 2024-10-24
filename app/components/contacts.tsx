import React from 'react';

const Contacts = () => {
    const currentYear = new Date().getFullYear();

    return (
        <div>
            <div className="flex justify-center items-center text-white bg-primary pt-40 pb-20 font-thin">
                <div
                    className="flex flex-wrap flex-col w-full pl-10 items-start md:flex-row md:items-center *:leading-snug *:items-center *:justify-center *:inline-flex *:my-3 md:*:my-4 md:*:w-2/4 xl:*:w-auto xl:*:mx-10">
                    <div>
                        <div className="mr-5">
                            <svg className="h-8 w-8" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="m123.832031 475.464844c39.558594 23.804687 84.789063 36.351562 131.261719 36.351562 140.824219 0 256.90625-114.914062 256.90625-255.910156 0-140.832031-115.917969-255.90625-256.90625-255.90625-140.558594 0-254.910156 114.800781-254.910156 255.90625 0 47.09375 12.550781 92.667969 36.351562 132.257812l-36.535156 123.835938zm-93.65625-219.558594c0-124.570312 100.898438-225.917969 224.917969-225.917969 125.121094 0 226.917969 101.347657 226.917969 225.917969 0 124.574219-101.796875 225.917969-226.917969 225.917969-43.054688 0-84.894531-12.195313-120.984375-35.273438l-5.765625-3.683593-83.988281 24.78125 24.777343-83.992188-3.683593-5.761719c-23.078125-36.097656-35.273438-78.277343-35.273438-121.988281zm0 0"
                                    fill="#FFFFFF"
                                />
                                <path
                                    d="m124.628906 208.753906c4.953125 26.011719 19.65625 76.042969 62.464844 118.851563 42.808594 42.808593 92.839844 57.515625 118.855469 62.46875 29.789062 5.671875 73.503906 6.527343 94.867187-14.835938l11.910156-11.910156c6.011719-6.011719 9.324219-14.007813 9.324219-22.511719s-3.3125-16.496094-9.324219-22.507812l-47.628906-47.628906c-6.015625-6.015626-14.007812-9.324219-22.511718-9.324219-8.503907 0-16.496094 3.308593-22.511719 9.324219l-11.90625 11.90625c-7.273438 7.273437-21.003907 7.304687-28.332031.089843l-47.507813-49.5c-.070313-.074219-.140625-.148437-.214844-.21875-7.285156-7.285156-7.285156-19.140625 0-26.425781l11.90625-11.90625c12.445313-12.445312 12.445313-32.582031 0-45.023438l-47.628906-47.628906c-12.410156-12.410156-32.605469-12.410156-45.019531 0l-11.90625 11.910156v-.003906c-17.050782 17.054688-22.734375 53.40625-14.835938 94.875zm36.042969-73.664062c12.5-12.214844 11.832031-12.449219 13.210937-12.449219.472657 0 .945313.179687 1.304688.539063 50.1875 50.457031 48.171875 47.492187 48.171875 48.9375 0 .503906-.183594.945312-.539063 1.304687l-11.910156 11.90625c-18.964844 18.964844-19.039062 49.664063-.121094 68.714844l47.535157 49.53125c.074219.070312.144531.144531.21875.21875 18.960937 18.960937 51.808593 19.023437 70.832031 0l11.90625-11.90625c.71875-.71875 1.890625-.71875 2.609375 0 50.1875 50.453125 48.171875 47.488281 48.171875 48.933593 0 .507813-.183594.945313-.539062 1.304688l-11.910157 11.90625c-8.160156 8.160156-34.152343 13.042969-68.054687 6.585938-22.625-4.3125-66.128906-17.085938-103.257813-54.214844-37.128906-37.128906-49.902343-80.632813-54.210937-103.257813-6.460938-33.902343-1.578125-59.898437 6.582031-68.054687zm0 0"
                                    fill="#FFFFFF"
                                />
                            </svg>
                        </div>
                        <div>+39 349 51 27 583</div>
                    </div>
                    <div>
                        <div className="mr-5">
                            <svg className="w-8 h-8" height="512pt" viewBox="0 0 512 512" width="512pt"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="m498.078125 307.289062c3.582031-16.917968 5.394531-34.144531 5.394531-51.289062 0-66.101562-25.742187-128.246094-72.480468-174.988281-46.742188-46.742188-108.886719-72.484375-174.988282-72.484375-17.113281 0-34.339844 1.8125-51.285156 5.398437-19.136719-9.125-40.304688-13.925781-61.570312-13.925781-78.933594 0-143.148438 64.214844-143.148438 143.144531 0 21.257813 4.800781 42.425781 13.925781 61.574219-3.578125 16.914062-5.390625 34.136719-5.390625 51.28125 0 66.101562 25.742188 128.246094 72.480469 174.988281 46.738281 46.738281 108.882813 72.480469 174.988281 72.480469 17.113282 0 34.335938-1.816406 51.277344-5.394531 19.144531 9.125 40.3125 13.925781 61.578125 13.925781 78.929687 0 143.140625-64.214844 143.140625-143.140625 0-21.257813-4.800781-42.425781-13.921875-61.570313zm-129.21875 174.710938c-18.5625 0-36.269531-4.371094-52.636719-12.996094-2.171875-1.144531-4.574218-1.730468-6.992187-1.730468-1.144531 0-2.292969.132812-3.421875.398437-16.425782 3.847656-33.179688 5.796875-49.804688 5.796875-119.914062 0-217.46875-97.554688-217.46875-217.46875 0-16.65625 1.949219-33.410156 5.796875-49.796875.824219-3.519531.351563-7.21875-1.332031-10.417969-8.628906-16.378906-13-34.089844-13-52.640625 0-62.386719 50.757812-113.144531 113.148438-113.144531 18.5625 0 36.265624 4.371094 52.625 12.992188 3.199218 1.6875 6.898437 2.160156 10.417968 1.335937 16.429688-3.847656 33.1875-5.800781 49.8125-5.800781 119.914063 0 217.46875 97.558594 217.46875 217.472656 0 16.65625-1.949218 33.414062-5.796875 49.804688-.828125 3.519531-.355469 7.21875 1.328125 10.417968 8.625 16.375 12.996094 34.082032 12.996094 52.636719 0 62.386719-50.753906 113.140625-113.140625 113.140625zm0 0"
                                    fill="#ffffff"
                                />
                                <path
                                    d="m256 140.035156c44.246094 0 81.632812 23.117188 81.632812 50.480469 0 8.285156 6.714844 15 15 15 8.28125 0 15-6.714844 15-15 0-22.621094-12.394531-43.472656-34.890624-58.71875-20.710938-14.035156-47.964844-21.765625-76.742188-21.765625s-56.03125 7.730469-76.742188 21.765625c-22.5 15.246094-34.890624 36.097656-34.890624 58.71875s12.390624 43.476563 34.890624 58.722656c20.707032 14.035157 47.960938 21.761719 76.742188 21.761719 44.246094 0 81.632812 23.117188 81.632812 50.484375 0 27.363281-37.386718 50.480469-81.632812 50.480469-44.25 0-81.632812-23.117188-81.632812-50.480469 0-8.285156-6.714844-15-15-15-8.28125 0-15 6.714844-15 15 0 22.617187 12.390624 43.472656 34.890624 58.71875 20.710938 14.03125 47.964844 21.761719 76.742188 21.761719s56.03125-7.730469 76.742188-21.761719c22.496093-15.246094 34.890624-36.101563 34.890624-58.71875 0-22.625-12.394531-43.476563-34.890624-58.722656-20.710938-14.03125-47.964844-21.761719-76.742188-21.761719-44.25 0-81.632812-23.117188-81.632812-50.484375 0-27.363281 37.382812-50.480469 81.632812-50.480469zm0 0"
                                    fill="#ffffff"
                                />
                            </svg>
                        </div>
                        <div>alessandrorusso.id</div>
                    </div>
                    <div>
                        <div className="mr-5">
                            <svg className="w-8 h-8" viewBox="0 0 24 24" width="512" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="m.473 19.595c2.222 1.41 4.808 2.155 7.478 2.155 3.91 0 7.493-1.502 10.09-4.229 2.485-2.61 3.852-6.117 3.784-9.676.942-.806 2.05-2.345 2.05-3.845 0-.575-.624-.94-1.13-.647-.885.52-1.692.656-2.522.423-1.695-1.652-4.218-2-6.344-.854-1.858 1-2.891 2.83-2.798 4.83-3.139-.383-6.039-1.957-8.061-4.403-.332-.399-.962-.352-1.226.1-.974 1.668-.964 3.601-.117 5.162-.403.071-.652.41-.652.777 0 1.569.706 3.011 1.843 3.995-.212.204-.282.507-.192.777.5 1.502 1.632 2.676 3.047 3.264-1.539.735-3.241.98-4.756.794-.784-.106-1.171.948-.494 1.377zm7.683-1.914c.561-.431.263-1.329-.441-1.344-1.24-.026-2.369-.637-3.072-1.598.339-.022.69-.074 1.024-.164.761-.206.725-1.304-.048-1.459-1.403-.282-2.504-1.304-2.917-2.62.377.093.761.145 1.144.152.759.004 1.046-.969.427-1.376-1.395-.919-1.99-2.542-1.596-4.068 2.436 2.468 5.741 3.955 9.237 4.123.501.031.877-.44.767-.917-.475-2.059.675-3.502 1.91-4.167 1.222-.66 3.184-.866 4.688.712.447.471 1.955.489 2.722.31-.344.648-.873 1.263-1.368 1.609-.211.148-.332.394-.319.651.161 3.285-1.063 6.551-3.358 8.96-2.312 2.427-5.509 3.764-9.004 3.764-1.39 0-2.753-.226-4.041-.662 1.54-.298 3.003-.95 4.245-1.906z"
                                    fill="#FFFFFF"
                                />
                            </svg>
                        </div>
                        <div>@Alessandro_Info</div>
                    </div>
                    <div>
                        <div className="mr-5">
                            <svg className="w-8 h-8" viewBox="0 0 512 512" xmlSpace="preserve"
                                 xmlns="http://www.w3.org/2000/svg">
                                <g>
                                    <g>
                                        <path
                                            d="M469.333,64H42.667C19.135,64,0,83.135,0,106.667v298.667C0,428.865,19.135,448,42.667,448h426.667C492.865,448,512,428.865,512,405.333V106.667C512,83.135,492.865,64,469.333,64z M42.667,85.333h426.667c1.168,0,2.177,0.486,3.294,0.667L267.333,252.677c-6.938,4.385-16.854,3.677-21.906,0.563L39.365,86.003C40.484,85.82,41.496,85.333,42.667,85.333z M490.667,405.333c0,11.76-9.573,21.333-21.333,21.333H42.667c-11.76,0-21.333-9.573-21.333-21.333V106.667c0-2.385,0.637-4.585,1.362-6.728l210.221,170.54c6.927,4.479,14.917,6.854,23.083,6.854c7.875,0,15.563-2.198,22.313-6.375c0.625-0.323,1.219-0.708,1.76-1.156l209.23-169.868c0.727,2.145,1.363,4.346,1.363,6.733V405.333z"
                                            fill="#ffffff"
                                        />
                                    </g>
                                </g>
                            </svg>
                        </div>
                        <div>alessandrorusso.info@gmail.com</div>
                    </div>
                </div>
            </div>

            <div className="p-4 bottom-0 flex justify-center bg-primary text-white">
                <div className="font-hairline">© {currentYear} - Alessandro Russo</div>
            </div>
        </div>
    );
};

export default Contacts;
