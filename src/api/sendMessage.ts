import axios from "axios";
axios.defaults.baseURL = "https://652bfd10d0d1df5273ef0137.mockapi.io/api/v1";
interface IMessageData {
    name: string;
    number: string;
    message: string;
}
export const  sendMessage = async(data: IMessageData) => {
    try {
        const response = await axios.post('/book', {
            name: data.name,
            number: data.number,
            message: data.message
        })
        return "Success";
    } catch (error) {
        console.log(error);
    }
}