var app = new Vue ({
    el:'#root',
    data: {
        albums: [],
        genreArray: [],
        valGenre: 'All',
        genre: 'All',

    },
    methods: {
        selectGenre(){
            for (var i = 0; i < this.albums.length; i++) {

                if (!this.genreArray.includes(this.albums[i].genre)) {
                    this.genreArray.push(this.albums[i].genre);
                }
            }
            console.log(this.genreArray);
        }
    },
    mounted(){
        console.log('hello world');

        axios.get(' https://flynn.boolean.careers/exercises/api/array/music')
            .then((element) => {
                // console.log(element);
                // console.log(element.data);
                // console.log(element.data.response);
                this.albums = element.data.response;
                // console.log(this.albums);
                this.selectGenre();
            })

        this.valGenre = this.genre;
    }
})
