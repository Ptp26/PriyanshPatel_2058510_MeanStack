export class Contact{

    // name: string;
    // phone: string;
    // descr: string;

    constructor( public name : string ,   public phone : string , public descr ?: string){
        this.name = name;
        this.phone = phone;
        this.descr = this.name + ' ' + this.phone;
    }
}