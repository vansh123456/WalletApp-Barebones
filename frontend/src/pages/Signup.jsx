import { useState } from "react"
import { Heading } from "../components/Heading";
import { SubHeading } from "../components/SubHeading";
import { InputBox } from "../components/InputBox";
import { Button} from "../components/Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";
//import { Bottomwarning } from "../components/bottomwarning";

export const Signup = () => {

    const navigate = useNavigate();

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    return <div className="bg-slate-300 h-screen flex justify-center">
        <div className="flex flex-col justify-center">
            <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
                <Heading label= {"Sign up"}/>
                <SubHeading label = {"Enter your infromation to create an account"} />
                <InputBox onChange  = {(e) => {
                    setFirstName(e.target.value)
                }}placeholder = {"Vansh"} label = {"First Name"}/>
                <InputBox onChange = {(e) => {
                    setLastName(e.target.value)
                }}placeholder = {"Bhatnagr"} label = {"Last Name"} />
                <InputBox onChange  = {(e) => {
                    setUsername(e.target.value)
                }} placeholder = {"vansh@gmail.com"} label = {"Email"} />
                <InputBox onChange={(e) => {
                    setPassword(e.target.value)
                }} placeholder = {"123456"} label = {"Password"} />
                <div className="pt-4">
                    <Button  onClick = {async () => {
                        const response = await axios.post("http://localhost:3000/api/v1/user/signup", {
                            username,
                            firstName,
                            lastName,
                            password
                          });
                          localStorage.setItem("token",response.data.token)
                          navigate("/dashboard")
                    }} label = {"Sign Up!"}/>
                 </div>
                
            </div>
        </div>
    </div>
}