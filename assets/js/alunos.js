
var aluno = {};
var listaAlunos = {};

function adicionarAluno() 
{
    aluno.nome = $("#nomeAluno").val();
    aluno.nota1 = parseInt($("#nota1bimestre").val());
    aluno.nota2 = parseInt($("#nota2bimestre").val());
    aluno.nota3 = parseInt($("#nota3bimestre").val());
    aluno.nota4 = parseInt($("#nota4bimestre").val());
    aluno.total = calcularTotal(aluno.nota1, aluno.nota2, aluno.nota3, aluno.nota4);
    aluno.media = calcularMedia(aluno.total);
    aluno.situacao = calcularSituacao(aluno.media);
    var form =  $("#formAddAluno");
    
    console.log($(":form").validate());
    

    adicionarLinhaNatabela(aluno);

    //Limpar campos de input
    aluno = {};
    $(":input").val("");
}
function calcularTotal(nota1, nota2, nota3, nota4) 
{
    return nota1 + nota2 + nota3 + nota4;
}
function calcularMedia(valor) 
{
    return valor / 4;
}
function calcularSituacao(media) 
{
    const MEDIA_APROVACAO = 7;

    if (media >= MEDIA_APROVACAO) 
    {
        return '<span class="badge badge-success">APROVADO</span>';    
    }
    else
    {
        return '<span class="badge badge-danger">REPROVADO</span>'; 
    }

}
function adicionarLinhaNatabela(objetoAluno) 
{
    var tabela = document.querySelector("table");
    var tr = tabela.insertRow();
    tr.innerHTML =  '<td>'+objetoAluno.nome+'</td>'+
                    '<td>'+objetoAluno.nota1+'</td>'+
                    '<td>'+objetoAluno.nota2+'</td>'+
                    '<td>'+objetoAluno.nota3+'</td>'+
                    '<td>'+objetoAluno.nota4+'</td>'+
                    '<td>'+objetoAluno.media+'</td>'+
                    '<td>'+objetoAluno.total+'</td>'+
                    '<td>'+objetoAluno.situacao+'</td>';
}