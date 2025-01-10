// Inicializa Supabase
const supabaseUrl = 'https://TU_SUPABASE_URL';
const supabaseKey = 'TU_SUPABASE_KEY';
const supabase = supabase.createClient(supabaseUrl, supabaseKey);

async function login(email, password) {
    const { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
    });
    if (error) {
        console.error('Error al iniciar sesión:', error.message);
        return false;
    }
    return true;
}

function isLoggedIn() {
    return supabase.auth.session() !== null;
}

document.getElementById('loginForm')?.addEventListener('submit', async function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (await login(email, password)) {
        window.location.href = "dashboard.html";
    } else {
        alert("Email o contraseña incorrectos");
    }
});