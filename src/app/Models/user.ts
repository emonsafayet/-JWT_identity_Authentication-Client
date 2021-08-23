export  class User{
    public fullName:string="";
    public email:string="";
    public userName:string ="";
    public roles:string[] =[];

    constructor(fullName:string,userName:string,email:string,roles:string[])
    {
        this.fullName=fullName;
        this.userName=userName;
        this.email=email;
        this.roles=roles;
    }
}