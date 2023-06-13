export class NavItem {
    public name: string;
    public url: string;
    public active: boolean;

    constructor(name: string, url: string, active: boolean) {
        this.name = name;
        this.url = url;
        this.active = active;
    }
}
