export class SaveData {
    constructor(
        public id:string | number,
        public fullname: string,
        public phone: string,
        public email: string,
        public password: string
    ) { }
}