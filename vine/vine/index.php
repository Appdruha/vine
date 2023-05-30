<?php require 'db.php'
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="mainStyle.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600&family=Staatliches&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600&family=Playfair+Display:wght@500;600;700&family=Staatliches&display=swap" rel="stylesheet">
</head>

<body>
    <div class="container">
        <header class="header">
            <div class="header_info">
                <a href="https://yandex.ru/maps/20705/turinsk/house/novokuznechny_pereulok_4/YkoYcABkT0EDQFtifXx3cHVkYA==/?ll=63.674644%2C58.061974&z=16.68" target="_blank">Новокузнечный переулок 4/1</a>
                <p id="phone" data-clipboard-text="8 (812) 123-45-67">8 (812) 123-45-67</p>
            </div>
            <nav class="header_menu">
                <div class="header_menu_part">
                    <p class="header_link" id="link1">Каталог</p>
                    <div class="header_menu_burger" id="burger1">
                    </div>
                </div>
                <div class="header_menu_part">
                    <p class="header_link" id="link2">Доставка</p>
                    <div class="header_menu_burger" id="burger2">
                        <a href="#" class="burger_font">Заказать доставку</a>
                        <a href="#" class="burger_font">Условия доставки</a>
                    </div>
                </div>
                <div class="header_menu_part">
                    <p class="header_link" id="link3">Коллекции</p>
                    <div class="header_menu_burger" id="burger3">
                    </div>
                </div>
                <div class="header_menu_part">
                    <p class="header_link" id="link4">Контакты</p>
                    <div class="header_menu_burger" id="burger4">
                        <p class="burger_font" id="phone" data-clipboard-text="8 (812) 123-45-67">8 (812) 123-45-67</p>
                        <p class="burger_font" id="phone" data-clipboard-text="8 (812) 122-42-33">8 (812) 122-42-33</p>
                        <a href="https://vk.com/metrofit" target="_blank" class="burger_font">VK</a>
                        <a href="https://www.youtube.com/@YuriTheProfessional" target="_blank" class="burger_font">YouTube</a>
                        <a href="https://ru-ru.facebook.com/" target="_blank" class="burger_font">Facebook</a>
                    </div>
                </div>
            </nav>
        </header>
        <div class="firstBlock">
            <div class="firstBlock_buttons_box">
                <button class="firstBlock_button btn" id="btn1">
                    <p>винная карта</p>
                </button>
                <button class="firstBlock_button btn" id="btn2">
                    <p>дегустация</p>
                </button>
            </div>
        </div>
        <div class="secondBlock">
            <div class="secondBlock_box">
                <div class="secondBlock_box_heading">
                    <p class="medium_heading_font">Лучший вкус, это вкус долголетнего вина</p>
                    <div></div>
                </div>
                <div class="secondBlock_box_text">
                    <p class="text_font">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat enim tortor in
                        hac id imperdiet
                        adipiscing. Pellentesque nisi, mi sit non sit sed fermentum. Felis adipiscing morbi sodales ac.
                        Mauris dictumst risus pulvinar blandit elit. Vestibulum quam ultrices nascetur et viverra
                        suscipit. Proin vitae aliquet leo aliquam amet rutrum. Lectus auctor purus ultrices enim
                        ultrices. Augue fringilla tellus tortor orci ultrices sed. Viverra cras sapien, pellentesque
                        viverra malesuada. Tellus dolor, eget vitae dignissim molestie eget sit duis. Vitae dui vel
                        pretium euismod diam. Pellentesque amet, lacus, amet, quis risus. Pellentesque scelerisque nunc,
                        orci aliquam quis.</p>
                </div>
                <div class="secondBlock_box_img">
                    <img src="img/glass.svg" alt="glass">
                </div>
            </div>
        </div>
        <div class="thirdBlock">
            <div class="thirdBlock_box">
                <div class="thirdBlock_box_leftPart">
                    <div class="thirdBlock_box_leftPart_heading">
                        <p class="text_font">Новинки коллекций</p>
                        <p>Март 1980 Урожай Марселя</p>
                        <div></div>
                    </div>
                    <div class="thirdBlock_box_leftPart_info">
                        <p class="thirdBlock_font">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat enim
                            tortor in hac id
                            imperdiet adipiscing. Pellentesque nisi, mi sit non sit sed fermentum. Felis adipiscing
                            morbi sodales ac. </p>
                        <table class="table">
                            <tr>
                                <td class="table_left">
                                    <p class="table_text">1980</p>
                                </td>
                                <td class="table_right">
                                    <div>
                                        <p class="table_heading">Colli Euganei Bianco Ca' Lustra 1980</p>
                                        <p class="table_text">Красочная бутылка вина из Марселя</p>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td class="table_left">
                                    <p class="table_text">1980</p>
                                </td>
                                <td class="table_right">
                                    <div>
                                        <p class="table_heading">Colli Euganei Bianco Ca' Lustra 1980</p>
                                        <p class="table_text">Красочная бутылка вина из Марселя</p>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td class="table_left">
                                    <p class="table_text">1980</p>
                                </td>
                                <td class="table_right">
                                    <div>
                                        <p class="table_heading">Colli Euganei Bianco Ca' Lustra 1980</p>
                                        <p class="table_text">Красочная бутылка вина из Марселя</p>
                                    </div>
                                </td>
                            </tr>
                        </table>
                        <p class="thirdBlock_font">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat enim
                            tortor in hac id
                            imperdiet
                            adipiscing. Pellentesque nisi, mi sit non sit sed fermentum. Felis adipiscing morbi sodales
                            ac.
                        </p>
                        <button class="thirdBlock_button btn" id="btn3">
                            <p>узнать подробнее</p>
                        </button>
                    </div>
                </div>
                <div class="thirdBlock_box_rightPart">
                    <div class="thirdBlock_box_rightPart_img1"></div>
                    <div class="thirdBlock_box_rightPart_img2"></div>
                    <div class="thirdBlock_box_rightPart_img3"></div>
                </div>
            </div>
        </div>
        <div class="fourthBlock">
            <div class="fourthBlock_box">
                <div class="fourthBlock_box_img1">
                    <img src="img/endPic1.svg" alt="grape">
                </div>
                <div class="fourthBlock_box_heading">
                    <p>Запись на дегустацию</p>
                </div>
                <div class="underline"></div>
                <div class="fourthBlock_box_img2">
                    <img src="img/endPic2.svg" alt="barrel">
                </div>
                <div class="fourthBlock_box_form">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat enim tortor in hac id imperdiet
                        adipiscing. Pellentesque nisi, mi sit non sit sed fermentum.</p>
                    <form class="form">
                        <div class="input_container">
                            <input type="text" placeholder=" " name="name" id="name" class="input">
                            <label for="name" class="placeholder ph1">Ваше имя</label>
                        </div>
                        <div class="input_container">
                            <input type="email" placeholder=" " name="email" id="email" class="input">
                            <label for="email" class="placeholder ph2">Email</label>
                        </div>
                        <select name="address">
                            <option value="Бутик на Невском 103">Бутик на Невском 103</option>
                            <option value="Бутик на Московской 7">Бутик на Московской 7</option>
                        </select>
                        <button type="button" class="fourthBlock_form_button btn" id="btn4">
                            <p>записаться</p>
                        </button>
                    </form>
                    <div class="after_form"></div>
                </div>
            </div>
        </div>
        <footer class="footer">
            <div class="footer_box">
                <div class="footer_box_info">
                    <a href="#">Главная</a>
                    <a href="#">Каталог</a>
                    <a href="#">Поставщики</a>
                    <a href="#">Коллекции</a>
                    <a href="#">Дегустация</a>
                    <a href="#">Коллекция 2020</a>
                    <a href="#">Контакты</a>
                </div>
                <div class="footer_box_contacts">
                    <div>
                        <p>винный бутик LE CORTE</p>
                    </div>
                    <div>
                        <p id="phone" data-clipboard-text="8 (812) 123-45-67">8 (812) 123-45-67
                        </p>
                    </div>
                    <div>
                        <div class="footer_img_box">
                            <img id="youtube" src="img/youtube.svg" alt="youtube">
                            <img id="vk" src="img/vk.svg" alt="vk">
                            <img id="facebook" src="img/facebook.svg" alt="facebook">
                        </div>
                    </div>
                    <div>
                        <p>© le-corte.ru</p>
                    </div>
                </div>
            </div>
        </footer>
    </div>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js"></script>
    <script src="https://cdn.jsdelivr.net/clipboard.js/1.5.3/clipboard.min.js"></script>
    <script src="index.js"></script>
</body>

</html>