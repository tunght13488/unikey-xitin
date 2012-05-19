function ajaxFunction1() {
    var S = document.form1.textbox1.value;

    S = S.replace(/b/g, "|3");
    S = S.replace(/B/g, "|3");
    S = S.replace(/l/g, "|_");
    S = S.replace(/L/g, "|_");
    S = S.replace(/không/g, "h0k");
    S = S.replace(/khong/g, "h0k");
    S = S.replace(/hông/g, "h0k");
    S = S.replace(/hong/g, "h0k");
    S = S.replace(/phò/g, "4`");
    S = S.replace(/hài/g, "2`");


    S = S.replace(/Gi/g, "J");
    S = S.replace(/ r/g, " z");
    S = S.replace(/ R/g, " z");
    S = S.replace(/d/g, "|)");
    S = S.replace(/D/g, "|)");

    S = S.replace(/ie/g, "j");
    S = S.replace(/iế/g, "j'");
    S = S.replace(/i\u1EC3/g, "j");
    S = S.replace(/i\u1EC7/g, "j.");

    S = S.replace(/đ/g, "+)");
    S = S.replace(/Đ/g, "+)");

    S = S.replace(/í/g, "j'");
    S = S.replace(/ì/g, "j`");
    S = S.replace(/i/g, "j");
    S = S.replace(/ị/g, "j.");
    S = S.replace(/ỉ/g, "j");
    S = S.replace(/ĩ/g, "j~");

    S = S.replace(/gj`/g, "ji`");
    S = S.replace(/Gj`/g, "ji`");

    S = S.replace(/gj /g, "ji`");

    S = S.replace(/gj/g, "j");

    S = S.replace(/y/g, "ij");
    S = S.replace(/ý/g, "ij'");
    S = S.replace(/ỳ/g, "ij`");
    S = S.replace(/ỵ/g, "ij.");
    S = S.replace(/ỹ/g, "ij~");
    S = S.replace(/ỷ/g, "ij?");

    S = S.replace(/ư/g, "u");
    S = S.replace(/Ư/g, "u");

    S = S.replace(/ú/g, "u'");
    S = S.replace(/Ú/g, "u'");
    S = S.replace(/ứ/g, "u'");
    S = S.replace(/Ứ/g, "u'");

    S = S.replace(/ù/g, "u`");
    S = S.replace(/Ù/g, "u`");
    S = S.replace(/ừ/g, "u`");
    S = S.replace(/Ừ/g, "u`");

    S = S.replace(/ụ/g, "u.");
    S = S.replace(/Ụ/g, "u.");
    S = S.replace(/ự/g, "u.");
    S = S.replace(/Ự/g, "u.");

    S = S.replace(/ủ/g, "u?");
    S = S.replace(/Ủ/g, "u?");
    S = S.replace(/ử/g, "u?");
    S = S.replace(/Ử/g, "u?");

    S = S.replace(/ũ/g, "u~");
    S = S.replace(/Ũ/g, "u~");
    S = S.replace(/ữ/g, "u~");
    S = S.replace(/Ữ/g, "u~");

    S = S.replace(/o/g, "0");
    S = S.replace(/ô/g, "0");
    S = S.replace(/ơ/g, "0");
    S = S.replace(/O/g, "0");
    S = S.replace(/Ô/g, "0");
    S = S.replace(/Ơ/g, "0");

    S = S.replace(/ó/g, "0'");
    S = S.replace(/ố/g, "0'");
    S = S.replace(/ớ/g, "0'");
    S = S.replace(/Ó/g, "0'");
    S = S.replace(/Ố/g, "0'");
    S = S.replace(/Ớ/g, "0'");

    S = S.replace(/ò/g, "0`");
    S = S.replace(/ồ/g, "0`");
    S = S.replace(/ờ/g, "0`");
    S = S.replace(/Ò/g, "0`");
    S = S.replace(/Ồ/g, "0`");
    S = S.replace(/Ờ/g, "0`");

    S = S.replace(/ọ/g, "0.");
    S = S.replace(/ộ/g, "0.");
    S = S.replace(/ợ/g, "0.");
    S = S.replace(/Ọ/g, "0.");
    S = S.replace(/Ộ/g, "0.");
    S = S.replace(/Ợ/g, "0.");

    S = S.replace(/ỏ/g, "0?");
    S = S.replace(/ổ/g, "0?");
    S = S.replace(/ở/g, "0?");
    S = S.replace(/Ỏ/g, "0?");
    S = S.replace(/Ổ/g, "0?");
    S = S.replace(/Ở/g, "0?");

    S = S.replace(/õ/g, "0~");
    S = S.replace(/ỗ/g, "0~");
    S = S.replace(/ỡ/g, "0~");
    S = S.replace(/Õ/g, "0~");
    S = S.replace(/Ỗ/g, "0~");
    S = S.replace(/Ỡ/g, "0~");

    S = S.replace(/e/g, "3");
    S = S.replace(/E/g, "3");
    S = S.replace(/ê/g, "3");
    S = S.replace(/Ê/g, "3");

    S = S.replace(/é/g, "3'");
    S = S.replace(/É/g, "3'");
    S = S.replace(/ế/g, "3'");
    S = S.replace(/Ế/g, "3'");

    S = S.replace(/è/g, "3`");
    S = S.replace(/È/g, "3`");
    S = S.replace(/ề/g, "3`");
    S = S.replace(/Ề/g, "3`");

    S = S.replace(/ẻ/g, "3?");
    S = S.replace(/Ẻ/g, "3?");
    S = S.replace(/ể/g, "3?");
    S = S.replace(/Ể/g, "3?");

    S = S.replace(/ẽ/g, "3~");
    S = S.replace(/Ẽ/g, "3~");
    S = S.replace(/ễ/g, "3~");
    S = S.replace(/Ễ/g, "3~");

    S = S.replace(/ẹ/g, "3.");
    S = S.replace(/Ẹ/g, "3.");
    S = S.replace(/ệ/g, "3.");
    S = S.replace(/Ệ/g, "3.");

    S = S.replace(/a/g, "4");
    S = S.replace(/ă/g, "4");
    S = S.replace(/â/g, "4");
    S = S.replace(/A/g, "4");
    S = S.replace(/Ă/g, "4");
    S = S.replace(/Â/g, "4");

    S = S.replace(/á/g, "4'");
    S = S.replace(/ắ/g, "4'");
    S = S.replace(/ấ/g, "4'");
    S = S.replace(/Á/g, "4'");
    S = S.replace(/Ắ/g, "4'");
    S = S.replace(/Ấ/g, "4'");

    S = S.replace(/à/g, "4`");
    S = S.replace(/ằ/g, "4`");
    S = S.replace(/ầ/g, "4`");
    S = S.replace(/À/g, "4`");
    S = S.replace(/Ằ/g, "4`");
    S = S.replace(/Ầ/g, "4`");

    S = S.replace(/ạ/g, "4.");
    S = S.replace(/ặ/g, "4.");
    S = S.replace(/ậ/g, "4.");
    S = S.replace(/Ạ/g, "4.");
    S = S.replace(/Ậ/g, "4.");
    S = S.replace(/Ặ/g, "4.");

    S = S.replace(/ã/g, "4~");
    S = S.replace(/ẵ/g, "4~");
    S = S.replace(/ẫ/g, "4~");
    S = S.replace(/Ã/g, "4~");
    S = S.replace(/Ẫ/g, "4~");
    S = S.replace(/Ẵ/g, "4~");

    S = S.replace(/ả/g, "4?");
    S = S.replace(/ẳ/g, "4?");
    S = S.replace(/ẩ/g, "4?");
    S = S.replace(/Ả/g, "4?");
    S = S.replace(/Ẩ/g, "4?");
    S = S.replace(/Ẳ/g, "4?");

    document.form1.textbox2.value = S;
}

function ajaxFunction2()
{
    var S = document.form1.textbox2.value;

    S = S.replace(/h0k/g, "khong");
    S = S.replace(/\|3/g, "b");
    S = S.replace(/\|_/g, "l");
    S = S.replace(/\|\)/g, "d");
    S = S.replace(/\+\)/g, "đ");
    S = S.replace(/3/g, "e");
    S = S.replace(/4/g, "a");
    S = S.replace(/0/g, "o");
    S = S.replace(/z/g, "r");
    S = S.replace(/dz/g, "d");
    S = S.replace(/ij/g, "y");
    S = S.replace(/vik/g, "vie't");

    S = S.replace(/\'j/g, "\'i");
    S = S.replace(/\`j/g, "\`i");
    S = S.replace(/\?j/g, "\?i");
    S = S.replace(/\~j/g, "\~i");
    S = S.replace(/\.j/g, "\.i");


    S = S.replace(/ p/g, " b");
    S = S.replace(/bh/g, "ph");

    S = S.replace(/ji\`/g, "gi");
    S = S.replace(/Ji\`/g, "gi");
    S = S.replace(/ j/g, " gi");
    S = S.replace(/ J/g, " gi");
    S = S.replace(/j/g, "i");
    S = S.replace(/J/g, "i");

    document.form1.textbox1.value = S;
}