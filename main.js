const translations = {
    en: {
    title: "Unlimited movies, TV shows and more.",
    subtitle: "Watch anywhere. Cancel anytime.",
    prompt: "Ready to watch? Enter your email to create or restart your membership.",
    button: "Get Started",
    emailPlaceholder: "Email address"
    },
    es: {
    title: "Películas, series ilimitadas y más.",
    subtitle: "Mira en cualquier lugar. Cancela cuando quieras.",
    prompt: "¿Listo para mirar? Ingresa tu correo electrónico para crear o reiniciar tu membresía.",
    button: "Comenzar",
    emailPlaceholder: "Dirección de correo"
    },
    jp: {
    title: "無制限の映画、テレビ番組など。",
    subtitle: "どこでも見られる。いつでもキャンセル可能。",
    prompt: "視聴を始めますか？ メールアドレスを入力してメンバーシップを作成または再開してください。",
    button: "スタート",
    emailPlaceholder: "メールアドレス"
    },
    pt: {
    title: "Filmes, séries e muito mais sem limites.",
    subtitle: "Assista onde quiser. Cancele quando quiser.",
    prompt: "Pronto para assistir? Insira seu e-mail para criar ou reiniciar sua assinatura.",
    button: "Começar",
    emailPlaceholder: "Endereço de e-mail"
    },
};

document.querySelector('.language').addEventListener('change', (event) => {
    const language = event.target.value.toLowerCase();

    // Atualizar textos dinamicamente
    document.querySelector('h1').textContent = translations[language].title;
    document.querySelector('h2').textContent = translations[language].subtitle;
    document.querySelector('h3').textContent = translations[language].prompt;
    document.querySelector('.start-btn').textContent = translations[language].button;
    document.querySelector('input[name="email"]').placeholder = translations[language].emailPlaceholder;
});
