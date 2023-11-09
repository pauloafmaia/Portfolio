$(function () {
  $(".br").click(function () {
    $(".navbar").children().eq(0).text("Início");
    $(".navbar").children().eq(1).text("Sobre mim");
    $(".navbar").children().eq(2).text("Projetos");
    $(".navbar").children().eq(3).text("Habilidades");
    $(".navbar").children().eq(4).text("Contatos");
    $("#text-home").text("Desenvolvedor de Software");
    $("#text-sobre-1").text(
      "Desenvolvendo interfaces e APIs com Java, Javascript, React, HTML e CSS desde 2022"
    );
    $("#text-sobre-2").text(
      "Cursando Análise e Desenvolvimento de Sistemas na UNINASSAU"
    );
    $("#text-sobre-3").text(
      "Interesse em desenvolvimento Front-end e Back-end"
    );
    $("#text-sobre-4").text(
      "Buscando uma oportunidade para atuar como Desenvolvedor"
    );
    $(".language-selected").text("pt-BR");
    $(".language-selected").removeClass("change-en");
    $(".language-selected").addClass("change-br");
  });
});

$(function () {
  $(".en").click(function () {
    $(".navbar").children().eq(0).text("Home");
    $(".navbar").children().eq(1).text("About me");
    $(".navbar").children().eq(2).text("Projects");
    $(".navbar").children().eq(3).text("Habilities");
    $(".navbar").children().eq(4).text("Contact");
    $("#text-home").text("Software Developer");
    $("#text-sobre-1").text(
      "Developing interfaces and APIs with Java, Javascript, React, HTML and CSS since 2022"
    );
    $("#text-sobre-2").text(
      "Studying Systems Analysis and Development at UNINASSAU"
    );
    $("#text-sobre-3").text("Interest in Front-end and Back-end development");
    $("#text-sobre-4").text(
      "Looking for an opportunity to work as a Developer"
    );
    $(".language-selected").text("en-US");
    $(".language-selected").removeClass("change-br");
    $(".language-selected").addClass("change-en");
  });
});
