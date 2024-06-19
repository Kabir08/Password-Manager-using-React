import React from 'react'
import { useRef, useState, useEffect} from 'react';

const Manager = () => {
    const ref = useRef()
    const passwordref = useRef()
    const [form, setform] = useState({ site: "", username: "", password: "" })
    const [passwordArray, setPasswordArray] = useState([])

    useEffect(() => {
        let passwords = localStorage.getItem("passwords");
        let passwordArray;
        if (passwords) {
            setPasswordArray(JSON.parse(passwords))
        }
    }, [])


    const savePassword = () => {
        setPasswordArray([...passwordArray, form])
        localStorage.setItem("passwords", JSON.stringify([...passwordArray, form]))

    }

    const showPassword = () => {
        passwordref.current.type = "text"
        if (ref.current.src.includes("./public/hide.svg")) {
            ref.current.src = "/show.svg"
            passwordref.current.type = "password"
        }
        else{
            ref.current.src = "/hide.svg"
            passwordref.current.type = "text"
        }
    }

    const handlechange = (e) => {
        setform({ ...form, [e.target.name]: e.target.value })
    }


    return (
        <>
            <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"><div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_100%_200px,#d5c5ff,transparent)]"></div></div>

            <div className=" max-w-4xl  mycontainer">
                <h1 className='text-4xl text font-bold text-center'>
                    <span className='text-green-500 '> &lt;</span>
                    Pass
                    <span className='text-green-500'>OP/&gt;</span>
                </h1>
                <p className='text-green-900 text-md text-center'>Your Own Password Manager</p>
                <div className=' flex items-center flex-col text-black p-4 gap-6'>
                    <input value={form.site} onChange={handlechange} placeholder='Enter website URL' className='rounded-full border border-green-500 w-full p-4 py-1' type="text" name='site' id='' />
                    <div className="flex w-full gap-8 justify-between ">
                        <input value={form.username} onChange={handlechange} placeholder='Enter Username' className='rounded-full border border-green-500 w-full p-4 py-1' type="text" name='username' id='' />
                        <div className="relative">

                            <input ref={passwordref} value={form.password} onChange={handlechange} placeholder='Enter Password' className='rounded-full border border-green-500 w-full p-4 py-1' type="password" name='password' id='' />
                            <span className="absolute right-2 cursor-pointer top-1.5 " onClick={showPassword}><img ref={ref} className=' w-[22px]' src="./public/show.svg" alt="eye" /></span>
                        </div>
                    </div>
                    <button onClick={savePassword} className='flex justify-center items-center bg-green-400 hover:bg-green-300 rounded-full px-3 py-2 w-fit'>
                        <lord-icon
                            src="https://cdn.lordicon.com/jgnvfzqg.json"
                            trigger="hover">
                        </lord-icon>
                        Add Password
                    </button>
                </div>
                <div className='passwords'>
                    <h2 className='font-bold text-2xl py-4'>Your Passwords</h2>
                    {passwordArray.length === 0 && <div> No Passwords to Show</div>}
                    {passwordArray.length != 0 &&<table className="table-auto w-full rounded-md overflow-hidden">
                        <thead className=' bg-green-800 text-white'>
                            <tr>
                                <th>Site</th>
                                <th>Username</th>
                                <th>Password</th>
                            </tr>
                        </thead>
                        <tbody className='bg-green-100'>
                            {passwordArray.map ((item, index)=>{ return <tr key={index}>
                                <td className='pl-[120px] '><a href="{item.site} target = '_blank"></a>{item.site}</td>
                                <td className='pl-[120px] '>{item.username}</td>
                                <td className='pl-[120px] '>{item.password}</td>
                            </tr>
                            })}
                            
                        </tbody>
                    </table>}
                </div>
            </div>
        </>
    )
}

export default Manager
