const userData = {
    nameimg: 'catslin-removebg-preview.png',
    username: 'Name',
    usermark: 'Hi i am slin,what can i do for you',
    userintroduce: "If you can keep your head when all about you Are losing theirs and blaming it on you, If you can trust yourself when all men doubt you, But make allowance for their doubting too; If you can wait and not be tired by waiting, Or being lied about, don't deal in lies, Or being hated, don't give way to hating, And yet don't look too good, nor talk too wise:",
    setuserData: function(image, name, mark, introduce){
        this.nameimg = image;
        this.username = name;
        this.usermark = mark;
        this.userintroduce = introduce;
    },
    showData: function(user) {
        user[0].src = this.nameimg;
        user[1].innerHTML = this.username;
        user[2].innerHTML = this.usermark;
        user[3].innerHTML = this.userintroduce;
    }
  };
  
  export default userData;