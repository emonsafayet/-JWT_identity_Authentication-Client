export  class User{
    public fullName:string="";
    public email:string="";
    public userName:string ="";
    public role:string ="";

    constructor(fullName:string,userName:string,email:string,role:string)
    {
        this.fullName=fullName;
        this.userName=userName;
        this.email=email;
        this.role=role;
    }
}