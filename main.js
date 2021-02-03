canvas = new fabric.Canvas("myCanvas");
player_x = 10;
player_y = 10;
block_img_width = 30;
block_img_height = 30;
player_object = "";
block_img_object = "";

function player_update() {
    fabric.Image.fromURL("player.png", function(Img) {
        player_object = Img;

        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top: player_y,
            left: player_x
        });
        canvas.add(player_object);
    });
}

function new_image(get_image) {
    fabric.Image.fromURL(get_image, function(Img) {
        block_img_object = Img;

        block_img_object.scaleToWidth(block_img_width);
        block_img_object.scaleToHeight(block_img_height);
        block_img_object.set({
            top: player_y,
            left: player_x
        });
        canvas.add(block_img_object);
    });
}
window.addEventListener("keydown", myKeydown);

function myKeydown(e) {
    KeyPressed = e.keyCode;
    console.log(KeyPressed);
    if (e.shiftKey == true && KeyPressed == 68) {
        block_img_height = block_img_height + 10;
        block_img_width = block_img_width + 10;
        document.getElementById("Current_width").innerHTML = block_img_width;
        document.getElementById("Current_height").innerHTML = block_img_height;
    }
    if (e.shiftKey == true && KeyPressed == 90) {
        block_img_height = block_img_height - 10;
        block_img_width = block_img_width - 10;
        document.getElementById("Current_height").innerHTML = block_img_height;
        document.getElementById("Current_width").innerHTML = block_img_width;
    }

    if (KeyPressed == 38) {
        up();
    }
    if (KeyPressed == 40) {
        down();
    }
    if (KeyPressed == 39) {
        right();
    }

    if (KeyPressed == 37) {
        left();
    }
    if (KeyPressed == 37) {
        left();
    }
    if (KeyPressed == 67) {
        new_image("captain_america_left_hand.png");
        //c
    }
    if (KeyPressed == 70) {
        new_image("Final_output.png");
        //f
    }
    if (KeyPressed == 72) {
        new_image("hulk_face.png");
        //h
    }
    if (KeyPressed == 76) {
        new_image("hulk_left_hand.png");
        //l
    }
    if (KeyPressed == 71) {
        new_image("hulk_legs.png");
        //g
    }
    if (KeyPressed == 82) {
        new_image("hulk_right_hand.png");
        //r
    }
    if (KeyPressed == 66) {
        new_image("hulkd_body.png");
        //b
    }
    if (KeyPressed == 73) {
        new_image("ironman_body.png");
        //i
    }
    if (KeyPressed == 77) {
        new_image("ironman_face.png");
        //m
    }
    if (KeyPressed == 84) {
        new_image("ironman_left_hand.png");
        //t
    }
    if (KeyPressed == 83) {
        new_image("ironman_legs.png");
        //s
    }
    if (KeyPressed == 78) {
        new_image("ironman_right_hand.png");
        //n
    }
    if (KeyPressed == 65) {
        new_image("spiderman_body.png");
        //a
    }
    if (KeyPressed == 75) {
        new_image("spiderman_face.png");
        //k
    }
    if (KeyPressed == 89) {
        new_image("spiderman_left_hand.png");
        //y
    }
    if (KeyPressed == 79) {
        new_image("spiderman_legs.png");
        //o
    }
    if (KeyPressed == 80) {
        new_image("spiderman_right_hand.png");
        //p
    }
    if (KeyPressed == 86) {
        new_image("thor_face.png");
        //v
    }
    if (KeyPressed == 69) {
        new_image("thor_left_hand.png");
        //e
    }
    if (KeyPressed == 85) {
        new_image("thor_right_hand.png");
        //u
    }
}

function up() {
    if (player_y >= 0) {
        player_y = player_y - block_img_height;
        canvas.remove(player_object);
        player_update();
    }
}

function down() {
    if (player_y <= 500) {
        player_y = player_y + block_img_height;
        canvas.remove(player_object);
        player_update();
    }
}

function right() {
    if (player_x <= 850) {
        player_x = player_x + block_img_width;
        canvas.remove(player_object);
        player_update();
    }
}

function left() {
    if (player_x >= 0) {
        player_x = player_x - block_img_width;
        canvas.remove(player_object);
        player_update();
    }
}