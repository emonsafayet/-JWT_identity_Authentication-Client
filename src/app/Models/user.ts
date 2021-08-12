export  class User{
    public fullName:string="";
    public email:string="";
    public userName:string ="";

    constructor(fullName:string,userName:string,email:string)
    {
        this.fullName=fullName;
        this.userName=userName;
        this.email=email;
    }
}