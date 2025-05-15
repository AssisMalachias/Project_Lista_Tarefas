$(document).ready(function () {
  $('#form-tarefa').submit(function (e) {
    e.preventDefault();

    const nomeTarefa = $('#input-tarefa').val().trim();

    if (nomeTarefa !== '') {
      const novaLinha = `
        <tr>
          <td>${nomeTarefa}</td>
          <td class="botoes">
            <span class="btn-bom">BOM</span>
            <span class="btn-emoji">😜</span>
            <button class="btn-excluir">X</button>
          </td>
        </tr>
      `;

      $('#tabela-tarefas').append(novaLinha);
      $('#input-tarefa').val('');
    }
  });

  $('#tabela-tarefas').on('click', '.btn-excluir', function () {
    $(this).closest('tr').remove();
  });
});
