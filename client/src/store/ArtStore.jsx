import {makeAutoObservable} from "mobx";


export default class ArtStore {
    constructor() {
        this._subjects = []
        this._mediums = []
        this._arts = []
        this._selectedSubject = {} //выделение при наведении выбранного обьекта
        this._selectedMedium = {}
        this._page = 1
        this._totalCount = 0
        this._limit = 3
        makeAutoObservable(this)
    }

    setSubjects(subjects) {
        this._subjects = subjects
    }
    setMediums(mediums) {
        this._mediums = mediums
    }
    setArts(arts) {
        this._arts = arts
    }

    setSelectedSubject(subject){
        this.setPage(1)
        this._selectedSubject = subject
    }

    setSelectedMedium(medium){
        this.setPage(1)
        this._selectedMedium = medium
    }

    setPage(page){
        this._page = page
    }

    setTotalCount(count) {
        this._totalCount = count
    }

    get subjects() {
        return this._subjects
    }
    get mediums() {
        return this._mediums
    }
    get arts() {
        return this._arts
    }
    get selectedSubject() {
        return this._selectedSubject
    }
    get selectedMedium() {
        return this._selectedMedium
    }
    get totalCount() {
        return this._totalCount
    }
    get page() {
        return this._page
    }
    get limit() {
        return this._limit
    }

}