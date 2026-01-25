        const eventDate = new Date('2026-01-31T13:00:00');
        const pad = (value) => String(value).padStart(2, '0');

        function updateCountdown() {
            const now = new Date();
            const diff = eventDate - now;

            if (diff <= 0) {
                document.getElementById('cd-days').textContent = '00';
                document.getElementById('cd-hours').textContent = '00';
                document.getElementById('cd-mins').textContent = '00';
                document.getElementById('cd-secs').textContent = '00';
                return;
            }

            const totalSeconds = Math.floor(diff / 1000);
            const days = Math.floor(totalSeconds / 86400);
            const hours = Math.floor((totalSeconds % 86400) / 3600);
            const mins = Math.floor((totalSeconds % 3600) / 60);
            const secs = totalSeconds % 60;

            document.getElementById('cd-days').textContent = pad(days);
            document.getElementById('cd-hours').textContent = pad(hours);
            document.getElementById('cd-mins').textContent = pad(mins);
            document.getElementById('cd-secs').textContent = pad(secs);
        }

        updateCountdown();
        setInterval(updateCountdown, 1000);

        const joinForm = document.getElementById('join-form');
        if (joinForm) {
            joinForm.addEventListener('submit', (event) => {
                event.preventDefault();

                const nome = document.getElementById('nome')?.value?.trim() || '';
                const cpf = document.getElementById('cpf')?.value?.trim() || '';
                const telefone = document.getElementById('telefone')?.value?.trim() || '';
                const aluno = document.getElementById('aluno')?.value || '';
                const palestra = document.querySelector('input[name="palestra"]:checked')?.value || '';
                const qualPalestra = document.getElementById('qualPalestra')?.value || '';

                const mensagem = [
                    'Nova inscrição - Infinity Open',
                    `Nome: ${nome}`,
                    `CPF: ${cpf}`,
                    `Telefone: ${telefone}`,
                    `Aluno: ${aluno}`,
                    `Participa da palestra: ${palestra}`,
                    `Qual palestra: ${qualPalestra}`
                ].join('\n');

                const telefoneDestino = '553187927056';
                const url = `https://wa.me/${telefoneDestino}?text=${encodeURIComponent(mensagem)}`;
                window.open(url, '_blank');
            });
        }
        // --- Tocar som.mpeg ao clicar na logo DemoPrincipal ---
        // Cria elemento de áudio oculto
        const audioDemo = document.createElement('audio');
        audioDemo.src = 'song/som.mpeg';
        audioDemo.id = 'audioDemoPrincipal';
        audioDemo.preload = 'auto';
        document.body.appendChild(audioDemo);

        // Adiciona evento de clique na logo
        const demoLogo = document.getElementById('demoPrincipalLogo');
        if (demoLogo) {
            demoLogo.style.cursor = 'pointer';
            demoLogo.addEventListener('click', () => {
                audioDemo.currentTime = 0;
                audioDemo.play();
            });
        }

        