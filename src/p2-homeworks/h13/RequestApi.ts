import axios from "axios";

const instance = axios.create({
    baseURL:'https://neko-cafe-back.herokuapp.com/auth/'
})

const hwApi = {
    success(value:boolean){
       return instance.post('test',{
            success:value
        })
    }
}

export default hwApi