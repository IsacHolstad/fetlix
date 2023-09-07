import './index.css'
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/20/solid'
import AdminProfilesBtn from "../not-shared/AdminProfilesBtn.jsx";
import {Link} from "react-router-dom";

const files = [
    {
        name: 'Isac',
        source:
            'https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-88wkdmjrorckekha.jpg',
    },
    {
        name: "Morty",
        source:
            "https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
    },
    {
        name: "Vera",
        source:
            "https://i.pinimg.com/1200x/fb/8e/8a/fb8e8a96fca2f049334f312086a6e2f6.jpg"
    },
    {
        name: "Oline",
        source:
            "https://i.pinimg.com/474x/c0/8e/6c/c08e6c9595e03202a46a95f66578799f--netflix-girly-things.jpg"
    }
]

function Home() {

    return (
        <>
            <div className="w-full h-full bg-black absolute">
                <h3 className="text-white text-2xl font-light text-center mt-12">who is watching</h3>
                <ul role="list" className="grid px-24 py-52 grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
                    {files.map((file) => (
                        <li key={file.source} className="relative">
                            <div className="group aspect-h-7 aspect-w-10 block w-full overflow-hidden rounded-sm bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
                                <img src={file.source} alt="" className="pointer-events-none object-cover group-hover:opacity-75" />
                                <button type="button" className="absolute inset-0 focus:outline-none">
                                    <span className="sr-only">View details for {file.name}</span>
                                </button>
                            </div>
                            <Link to="/home">
                                <p className="pointer-events-none mt-2 block truncate text-lg text-center text-gray-400 font-light">{file.name}</p>
                            </Link>
                        </li>
                    ))}
                </ul>
                <AdminProfilesBtn/>
            </div>
        </>
    )
}

export default App
