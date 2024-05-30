const app = Vue.createApp({
    data() {
        return {
            /* Debe coincidir la directiva de personaje con el v-model -> Reactividad bidireccional DATA BINDING*/
            UserArray : [],
            Scores : [],
            RankingArray : [],
            username : '',
            password : '',
            logedIn : false
        }
    },
    methods: {
        logOut() {
            this.logedIn = false;
            this.username = '';
            this.password = '';
        },
        // REGISTRAR USUARIO, NO SE USA
        // Register()
        // {
        //     let username = document.getElementById('usernameRegister').value;
        //     let password = document.getElementById('passwordRegister').value;
        //     let exists = false;
        //     event.preventDefault();
        //         const options = {
        //             method: 'GET',
        //             headers: {
        //                 'Content-Type': 'application/json'
        //             }
        //         }
        //         fetch('https://localhost:7168/api/User/GetUsers')
        //             .then(response => response.json())
        //             .then(data => {
        //                 this.UserArray = data.data;
        //                 for (let i = 0; i < this.UserArray.length; i++) {
        //                     if(this.UserArray[i].username == username)
        //                     {
        //                         exists = true;
        //                         alert('El usuario ya existe');
        //                     }
        //                 }
        //                 if(exists == false)
        //                 {
        //                     fetch('https://localhost:7168/api/User/PostUser', {
        //                         method: 'POST',
        //                         headers: {
        //                             'Content-Type': 'application/json'
        //                         },
        //                         body: JSON.stringify({
        //                             username: document.getElementById('usernameRegister').value,
        //                             password: document.getElementById('passwordRegister').value,
        //                             scores: []
        //                         })
        //                     })
        //                     alert('Usuario creado con éxito');
        //                     exists = true;
        //                 }
        //             })
        //             .catch(error => {
        //                 console.log(error)
        //                 this.UserArray = [];
        //             });
        // },
        Login()
        {
            event.preventDefault();
            const options = {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            }
            fetch('https://169.254.18.210:7168/api/User/GetUsers')
                .then(response => response.json())
                .then(data => {
                    this.UserArray = data.data;
                    for (let i = 0; i < this.UserArray.length; i++) {
                        if(this.UserArray[i].username == this.username && this.UserArray[i].password == this.password)
                        {
                            this.logedIn = true;
                            this.register = false;
                            alert('Sesión iniciada con éxito');
                            this.UserRanking(this.username);
                            return;
                        }
                        else if (this.UserArray[i].username == this.username && this.UserArray[i].password != this.password)
                        {
                            alert('Contraseña incorrecta');
                            this.register = false;
                            return;
                        }
                    }
                })
                .catch(error => {
                    console.log(error)
                    this.UserArray = [];
                });
        },
        UserRanking(name)
        {
            let ranking = [];
            const options = {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            }
            fetch('https://169.254.18.210:7168/api/Score/GetScores', options)
                .then(response => response.json())
                .then(data => {
                    this.Scores = data.data;
                    this.Scores.forEach(result => {
                        if(result.username == name)
                        {
                            let char = result.character;
                            let time = result.time;
                            let flies = result.numFlies;
                            let score = {character: char, time: time, flies: flies};
                            ranking.push(score);
                        }
                    });
                    ranking.sort((a, b) => (a.time > b.time) ? 1 : -1);
                    this.UserArray = ranking;
                    return this.UserArray;
                })
                .catch(error => {
                    console.log(error)
                    this.Scores = [];
                });
        },
        ChangeRanking(frogType) {
            const options = {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            }
            fetch('https://169.254.18.210:7168/api/Score/GetScores', options)
                .then(response => response.json())
                .then(data => {
                    this.Scores = data.data;
                    this.RankingArray = [];
                    this.Scores.forEach(result => {
                        if(result.character == frogType){
                            this.RankingArray.push(result);
                        }
                    });
                    this.RankingArray.sort((a, b) => (a.time > b.time) ? 1 : -1);
                    this.RankingArray = this.RankingArray.slice(0, 10);
                    console.log(this.RankingArray);
                })
                .catch(error => {
                    console.log(error)
                    this.Scores = [];
                });
        }
    }
});