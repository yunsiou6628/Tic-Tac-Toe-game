let move = 1
let play = true  // 布林值 ， 還沒決定誰是贏家時，是 true
let step = 0
// 設定輸入 O 和 X
$('table tr td').click(function () {

    // console.log($(this))  // this 指 被點擊的物件 => td (此物件被 jquery 包裝)
    // console.log($(this).text())  // $(this).text() 指 被點擊的 td 的文字

    if ($(this).text() == "" && play) {   // 指按下的這一格是空的，還沒結束遊戲

        // 點空格之後會輸入 X 或 O
        if ((move % 2) == 1) {    // 遊戲開始前 move = 1 => ( 1 除 2 的餘數是 1 ) == 1 (第三次進入這裡...)
            $(this).append("X")   // append("X") 指在空的 td 標籤內，加入 X
            $(this).css('color', 'rgb(255, 180, 235)')
            $(this).css('filter', 'drop-shadow(0 0 0.3rem rgb(255, 180, 235))')
        } else {     // 第二次  move++ =>  move = 2 ( 2 除 2 的餘數是 0 ) !== 1  => 會進入 else (第四次進入這裡...)
            $(this).append("O")    // append("O") 指在空的 td 標籤內，加入 O
            $(this).css('color', 'rgb(170, 255, 213)')
            $(this).css('filter', 'drop-shadow(0 0 0.3rem rgb(170, 255, 213))')
        }
        move++

        // 排除 沒有贏家 和 沒有輸入內容物 這兩個 ， 會回傳贏家是 O 或 X 
        if (findWinner() !== "") {
            if(findWinner()!==-1){

                if (findWinner() == "X") {  // X 獲勝
                    $('body').append('<div class="winner"><span> Winner : </span> X </div>')
                    $('body').append('<button onclick="location.reload()">Play Again</button>')
                    // $('.winner').css('background-color', 'transparent')
                    $('.winner').css('color', 'rgb(255, 180, 235)')
                    $('.winner').css('filter', 'drop-shadow(0 0 0.8rem rgb(255, 180, 235))')
                    $('button').css('color', 'rgb(255, 180, 235)')
                } else if(findWinner() == "O") {   // O 獲勝
                    $('body').append('<div class="winner"><span> Winner  : </span> O </div>')
                    $('body').append('<button onclick="location.reload()">Play Again</button>')
                    // $('.winner').css('background-color', 'transparent')
                    $('.winner').css('color', 'rgb(170, 255, 213)')
                    $('.winner').css('filter', 'drop-shadow(0 0 0.8rem rgb(170, 255, 213))')
                    $('button').css('color', 'rgb(170, 255, 213)')
                }

                play = false // 遊戲結束，決定誰是贏家後，改成 false 
            }
            else if(noWinner()){
                // $('body').append('<div class="winner"><span> Winner  : </span> O </div>')
                $('body').append('<button onclick="location.reload()">Play Again</button>')
                // $('.winner').css('background-color', 'transparent')
                $('.winner').css('color', 'rgb(0, 229, 255)')
                $('.winner').css('filter', 'drop-shadow(0 0 0.8rem rgb(0, 229, 255))')
                $('button').css('color', 'rgb(0, 229, 255)')
                play = false // 遊戲結束，決定誰是贏家後，改成 false 
            }
        }
    }
})

// 判斷輸入的內容是否相同
function findWinner() {
    console.log('findwin');
    // 核對一下 index 內 tr td 結構
    sp1 = $('table tr:nth-child(1) td:nth-child(1)').text()

    sp2 = $('table tr:nth-child(1) td:nth-child(2)').text()
    sp3 = $('table tr:nth-child(1) td:nth-child(3)').text()
    sp4 = $('table tr:nth-child(2) td:nth-child(1)').text()
    sp5 = $('table tr:nth-child(2) td:nth-child(2)').text()
    sp6 = $('table tr:nth-child(2) td:nth-child(3)').text()
    sp7 = $('table tr:nth-child(3) td:nth-child(1)').text()
    sp8 = $('table tr:nth-child(3) td:nth-child(2)').text()
    sp9 = $('table tr:nth-child(3) td:nth-child(3)').text()
    

    // check rows 行
    if ((sp1 == sp2) && (sp2 == sp3)) {
       
        return sp3  // 直接回傳 sp3 = $('table tr:nth-child(1) td:nth-child(3)').text() => 顯示 O 或 X 內容
    } else if ((sp4 == sp5) && (sp5 == sp6)) {
       
        return sp6
    } else if ((sp7 == sp8) && (sp8 == sp9)) {
       
        return sp9
    }

    // // check columns 列
    else if ((sp1 == sp4) && (sp4 == sp7)) {
        return sp7
    } else if ((sp2 == sp5) && (sp5 == sp8)) {
        return sp8
    } else if ((sp3 == sp6) && (sp6 == sp9)) {
       
        return sp9
    }

    // // check diagonals 對角線
    else if ((sp1 == sp5) && (sp5 == sp9)) {
      
        return sp9
        
    } else if ((sp3 == sp5) && (sp5 == sp7)) {
      
        return sp7
        
    }

    // no winner
    return -1  // 回傳 -1 (不會顯示任何東西)
}

// 平手
function noWinner() {
    console.log('nooonono');
    let array = [];
    let count = 0;
    array[0] = $('table tr:nth-child(1) td:nth-child(1)').text()
    array[1] = $('table tr:nth-child(1) td:nth-child(2)').text()
    array[2] = $('table tr:nth-child(1) td:nth-child(3)').text()
    array[3] = $('table tr:nth-child(2) td:nth-child(1)').text()
    array[4] = $('table tr:nth-child(2) td:nth-child(2)').text()
    array[5] = $('table tr:nth-child(2) td:nth-child(3)').text()
    array[6] = $('table tr:nth-child(3) td:nth-child(1)').text()
    array[7] = $('table tr:nth-child(3) td:nth-child(2)').text()
    array[8] = $('table tr:nth-child(3) td:nth-child(3)').text()

    for(let i = 0;i<array.length;i++){
        if(array[i]!=''){
            count++
        }
    }
    if(count == 9){
        count = 0
        return true
    }else{
        count = 0
        return false
    }
}



