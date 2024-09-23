document.getElementById('btnPalindromo').addEventListener('click', function () {
    const input = document.getElementById('inputPalindromo').value.toLowerCase();
    const cleanedInput = input.replace(/[^a-z0-9]/g, ''); // Remover espacios y símbolos no alfabéticos
    const length = cleanedInput.length;

    const esPalindromo = (() => {
        for (let i = 0; i < length / 2; i++) {
            if (cleanedInput[i] !== cleanedInput[length - 1 - i]) {
                return false; // No es un palíndromo
            }
        }
        return true; // Es un palíndromo
    })();

    if (esPalindromo) {
        Swal.fire({
            icon: 'success',
            title: '¡Es un palíndromo!',
            text: `"${input}" se lee igual en ambos sentidos.`
        });
    } else {
        Swal.fire({
            icon: 'error',
            title: 'No es un palíndromo',
            text: `"${input}" no se lee igual en ambos sentidos.`
        });
    }
});
