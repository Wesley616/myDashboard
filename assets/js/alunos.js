
var aluno = {};
var listaAlunos = [];

function validarForm() 
{
   return   $('#nomeAluno').valid() &&
            $('#nota1bimestre').valid() &&
            $('#nota2bimestre').valid() &&
            $('#nota3bimestre').valid() &&
            $('#nota4bimestre').valid();
}

function feedbackFormValidacao() 
{
    if($("#nomeAluno").valid())
    {
        $( "#nomeAluno" ).removeClass( "is-invalid" );
    }
    else
    {
        $( "#nomeAluno" ).addClass( "is-invalid" );
    }

    if($("#nota1bimestre").valid())
    {
        $( "#nota1bimestre" ).removeClass( "is-invalid" );
    }
    else
    {
        $( "#nota1bimestre" ).addClass( "is-invalid" );
    }

    if($("#nota2bimestre").valid())
    {
        $( "#nota2bimestre" ).removeClass( "is-invalid" );
    }
    else
    {
        $( "#nota2bimestre" ).addClass( "is-invalid" );
    }

    if($("#nota3bimestre").valid())
    {
        $( "#nota3bimestre" ).removeClass( "is-invalid" );
    }
    else
    {
        $( "#nota3bimestre" ).addClass( "is-invalid" );
    }

    if($("#nota4bimestre").valid())
    {
        $( "#nota4bimestre" ).removeClass( "is-invalid" );
    }
    else
    {
        $( "#nota4bimestre" ).addClass( "is-invalid" );
    }  
}

function adicionarAluno() 
{
    var formValido = validarForm();
    if (formValido) 
    {
    aluno.nome = parseInt($("#nomeAluno").val());
    aluno.nota1 = parseInt($("#nota1bimestre").val());
    aluno.nota2 = parseInt($("#nota2bimestre").val());
    aluno.nota3 = parseInt($("#nota3bimestre").val());
    aluno.nota4 = parseInt($("#nota4bimestre").val());
    aluno.total = calcularTotal(aluno.nota1, aluno.nota2, aluno.nota3, aluno.nota4);
    aluno.media = calcularMedia(aluno.total);
    aluno.situacao = calcularSituacao(aluno.media);
    console.log($("#nomeAluno").valid());
    
    console.log($("#formAdicionarAluno").validate());
    

    adicionarLinhaNatabela(aluno);
    adicionarLinhaTotalAlunos();

    //Limpar campos de input
    aluno = {};
    $(":input").val("");
    limparForm();
    }
    else
    {
    verificarSeExisteValor();
    feedbackFormValidacao();
    toastr.error("Prencha todos os campos");
    }
    
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
                    '<td>'+objetoAluno.situacao+'</td>'+
                    '<td><button class="btn btn-danger btn-sm" onclick="deletarLinha(this)"><i class="fas fa-trash-alt"></i></button></td>';
toastr.success("Aluno adicionado com sucesso");
}
function verificarSeExisteValor() 
{
    if($("#nomeAluno").valid())
    {
        aluno.nome = $("#nomeAluno").val();
    }
    else
    {
        $( "#nomeAluno" ).addClass( "is-invalid" );
    }
    if($("#nota1bimestre").valid())
    {
        aluno.nome = $("#nota1bimestre").val();
    }
    else
    {
        $( "#nota1bimestre" ).addClass( "is-invalid" );
    }
    if($("#nota2bimestre").valid())
    {
        aluno.nome = $("#nota2bimestre").val();
    }
    else
    {
        $( "#nota2bimestre" ).addClass( "is-invalid" );
    }
    if($("#nota3bimestre").valid())
    {
        aluno.nome = $("#nota3bimestre").val();
    }
    else
    {
        $( "#nota3bimestre" ).addClass( "is-invalid" );
    }
    if($("#nota4bimestre").valid())
    {
        aluno.nome = $("#nota4bimestre").val();
    }
    else
    {
        $( "#nota4bimestre" ).addClass( "is-invalid" );
    }
}
function deletarLinha(linha) {
    var i = linha.parentNode.parentNode.rowIndex;
    document.querySelector('table').deleteRow(i);
    toastr.info('Aluno excluido com sucesso');
}
function limparForm() 
{
    if($("#nomeAluno").valid())
    {
        $( "#nomeAluno" ).removeClass( "is-invalid" );
    }
    else
    {
        $( "#nomeAluno" ).removeClass( "is-invalid" );
    }

    if($("#nota1bimestre").valid())
    {
        $( "#nota1bimestre" ).removeClass( "is-invalid" );
    }
    else
    {
        $( "#nota1bimestre" ).removeClass( "is-invalid" );
    }

    if($("#nota2bimestre").valid())
    {
        $( "#nota2bimestre" ).removeClass( "is-invalid" );
    }
    else
    {
        $( "#nota2bimestre" ).removeClass( "is-invalid" );
    }

    if($("#nota3bimestre").valid())
    {
        $( "#nota3bimestre" ).removeClass( "is-invalid" );
    }
    else
    {
        $( "#nota3bimestre" ).removeClass( "is-invalid" );
    }

    if($("#nota4bimestre").valid())
    {
        $( "#nota4bimestre" ).removeClass( "is-invalid" );
    }
    else
    {
        $( "#nota4bimestre" ).removeClass( "is-invalid" );
    }  
}
function adicionarLinhaTotalAlunos() 
{
    var i = linha.parentNode.parentNode.rowIndex;
    document.querySelector('table').deleteRow(i);
    var num = 0;
    num = num + 1;
    var tabela = document.querySelector("table");
    var tr = tabela.insertRow();
    tr.innerHTML = 'A tabela tem um total de '+num+' alunos';
}

