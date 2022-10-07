import {makeAutoObservable} from "mobx";

export default class ArtStore {
    constructor() {
        this._subject = [
            {id: 1, name: "Beach"},
            {id: 2, name: "Mountains"},
            {id: 3, name: "Sea"},
            {id: 4, name: "Human"},
        ]
        this._medium = [
            {id: 1, name: "Acrylic"},
            {id: 2, name: "Watercolor"},
            {id: 3, name: "Oil"},
        ]
        this._art = [
            {id: 1, name: "Moonlight on the seashore", price: 1500, currency: "€", likes: 14, image: './Moonlight on the seashore.jpg', Medium: "Acrylic", Material: "Canvas", Year: "2022", size: "23.6 W x 11.6 H x 0.1 D in"},
            {id: 2, name: "Summer seaside in Turkey", price: 450, currency: "€", likes: 8, image: './Summer seaside.jpg', Medium: "Acrylic", Material: "Canvas", Year: "2022", size: "27.6 W x 23.2 H x 0.6 D in"},
            {id: 3, name: "The lost world in mountains", price: 6300, currency: "€", likes: 21, image: './The lost world in mountains.jpg', Medium: "Acrylic", Material: "Canvas", Year: "2022", size: "15.7 W x 11.8 H x 0.6 D in"}
        ]
        this._selectedSubject = {}
        this._selectedMedium = {}
        makeAutoObservable(this)
    }

    setSubjects(subject) {
        this._subject = subject
    }
    setMediums(medium) {
        this._medium = medium
    }
    setArts(art) {
        this._art = art
    }

    setSelectedSubject(subject) {
        this.setPage(1)
        this._selectedSubject = subject
    }
    setSelectedMedium(medium) {
        this.setPage(1)
        this._selectedMedium = medium
    }

    get subject() {
        return this._subject
    }
    get medium() {
        return this._medium
    }
    get art() {
        return this._art
    }
    get selectedSubject() {
        return this._selectedSubject
    }
    get selectedMedium() {
        return this._selectedMedium
    }
}
