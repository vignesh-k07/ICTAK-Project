import React,{useState} from 'react';
import {useNavigate} from 'react-router-dom';

function Addteam() {

    const navigate = useNavigate();

    const [inpval,setINP] = useState({
        name:"",
        email:"",
        designation:"",
        profileimg:"",
    })

const setdata =(e) =>{
    console.log(e.target.value);

    const {name,value} = e.target;
    setINP((preval)=>{
        return{
            ...preval,
            [name]:value
        }
    })
}


const addinpdata = async(e)=>{
    e.preventDefault();
    const {name,email,designation,profileimg} = inpval;

    const res = await fetch("/Addteam",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            name,email,designation,profileimg
        })
    });

    const data = await res.json();
    console.log(data);

    if(res.status===422||!data){
        alert("error");
        console.log("error");
    }else{
        alert("data added");
        console.log("data added");
        navigate("/admin/team");
    }
}

    return (
    <section className="max-w-4xl p-6 mx-auto bg-gray-300 m-10 rounded-md shadow-md">
    <div style={{float:"right"}}>
      <a href='/admin/team'><p className='font-bold'>X</p></a>
    </div>
    <div
                      className="mx-auto mb-6 flex-shrink-0 flex items-center
                     justify-center h-12 w-12 rounded-full bg-blue-100 sm:mx-0
                      sm:h-10 sm:w-10"
                    >
                    </div>
        <h2 className="text-lg font-semibold text-gray-700 capitalize">Add User</h2>
        
        <form onSubmit={addinpdata}>
            <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                <div>
                    <label className="text-gray-700 " for="username">Username</label>
                    <input value={inpval.name} name="name" type="text" onChange={setdata}  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"/>
                </div>
                <div>
                    <label className="text-gray-700 " for="email">Email</label>
                    <input value={inpval.email} name="email" onChange={setdata} type="email" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"/>
                </div>

                <div>
                    <label className="text-gray-700 " for="designation">Designation</label>
                    <input value={inpval.designation} name="designation" onChange={setdata} type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"/>
                </div>

                <div>
                    <label className="text-gray-700 " for="password">Image url</label>
                    <input value={inpval.profileimg} name="profileimg" onChange={setdata} type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"/>
                </div>
            </div>

            <div className="flex justify-end mt-6">
                <button className="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Save</button>
            </div>
        </form>
    </section>
    );
}

export default Addteam;