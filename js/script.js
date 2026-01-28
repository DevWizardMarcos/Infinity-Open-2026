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
                const temAcompanhante = document.querySelector('input[name="temAcompanhante"]:checked')?.value || '';
                const nomeAcompanhante = document.getElementById('nomeAcompanhante')?.value?.trim() || '';
                const cpfAcompanhante = document.getElementById('cpfAcompanhante')?.value?.trim() || '';
                const telefoneAcompanhante = document.getElementById('telefoneAcompanhante')?.value?.trim() || '';

                const mensagem = [
                    'Nova inscrição - Infinity Open',
                    `Nome: ${nome}`,
                    `CPF: ${cpf}`,
                    `Telefone: ${telefone}`,
                    `Aluno: ${aluno}`,
                    `Participa da palestra: ${palestra}`,
                    `Qual palestra: ${qualPalestra}`,
                    `Tem acompanhante: ${temAcompanhante}`,
                    ...(temAcompanhante === 'sim' ? [
                        `\nDados do Acompanhante:`,
                        `Nome: ${nomeAcompanhante}`,
                        `CPF: ${cpfAcompanhante}`,
                        `Telefone: ${telefoneAcompanhante}`
                    ] : [])
                ].join('\n');

                const telefoneDestino = '553187927056';
                const url = `https://wa.me/${telefoneDestino}?text=${encodeURIComponent(mensagem)}`;
                window.open(url, '_blank');
            });
        }
        const audioDemo = document.createElement('audio');
        audioDemo.src = 'song/som.mpeg';
        audioDemo.id = 'audioDemoPrincipal';
        audioDemo.preload = 'auto';
        document.body.appendChild(audioDemo);

        const demoLogo = document.getElementById('demoPrincipalLogo');
        if (demoLogo) {
            demoLogo.style.cursor = 'pointer';
            demoLogo.addEventListener('click', () => {
                audioDemo.currentTime = 0;
                audioDemo.play();
            });
        }

        function toggleAcompanhante() {
            const temAcompanhante = document.querySelector('input[name="temAcompanhante"]:checked')?.value;
            const nomeSection = document.getElementById('acompanhanteSection');
            const cpfSection = document.getElementById('cpfAcompanhanteSection');
            const telefoneSection = document.getElementById('telefoneAcompanhanteSection');
            
            if (temAcompanhante === 'sim') {
                nomeSection.style.display = 'block';
                cpfSection.style.display = 'block';
                telefoneSection.style.display = 'block';
                document.getElementById('nomeAcompanhante').required = true;
                document.getElementById('cpfAcompanhante').required = true;
                document.getElementById('telefoneAcompanhante').required = true;
            } else {
                nomeSection.style.display = 'none';
                cpfSection.style.display = 'none';
                telefoneSection.style.display = 'none';
                document.getElementById('nomeAcompanhante').required = false;
                document.getElementById('cpfAcompanhante').required = false;
                document.getElementById('telefoneAcompanhante').required = false;
                document.getElementById('nomeAcompanhante').value = '';
                document.getElementById('cpfAcompanhante').value = '';
                document.getElementById('telefoneAcompanhante').value = '';
            }
        }
    


