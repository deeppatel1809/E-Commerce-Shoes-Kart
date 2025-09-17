function openAccount()
{
    const accountSidebar = document.getElementById('account-sidebar');

    accountSidebar.classList.add('container','accountSidebar');

    accountSidebar.innerHTML = `
        <div class="row mb-3">
            <div class="col-8 border-bottom border-secondary border-3 py-3">
                <p class="fw-bold h2">My Space</p>
            </div>
            <div class="col-4 text-end border-bottom border-secondary border-3 py-3">
                <a class="text-decoration-none text-dark" onclick="closeAccount()"><i class="bi bi-x h1"></i></a>
            </div>
        </div>
        <div id="account">
        </div>
    `;

    makeAccount();
}

function makeAccount()
{
    const account = document.getElementById('account');
    account.classList.add('container', 'd-flex', 'flex-column');

    const users = JSON.parse(localStorage.getItem('users')) || [];
    const currentUser = JSON.parse(localStorage.getItem('loginUser'));
    let user;

    if (currentUser)
    {
        user = users.find(item => item.login.email === currentUser.email || item.login.phone === currentUser.phone);

        account.innerHTML = `
            <div class="row">
                <div class="col accountItem">
                    <div class="row border-bottom border-3 border-dark">
                        <div class="col mb-3 fw-bold text-center">
                            Profile
                        </div>
                    </div>
                    <div class="row m-3">
                        <div class="col-12 col-md-4 fw-bold p-0">
                            Email :
                        </div>
                        <div class="col-12 col-md-8 text-md-end p-0">
                            ${user.login.email}
                        </div>
                    </div>
                    <div class="row m-3">
                        <div class="col-12 col-md-4 fw-bold p-0">
                            Phone :
                        </div>
                        <div class="col-12 col-md-8 text-md-end p-0">
                            ${user.login.phone}
                        </div>
                    </div>
                    <a class="text-decoration-none text-dark" onclick="logout()">
                        <div class="row">
                            <div class="col logout text-center text-danger">
                                Log Out <i class="bi bi-box-arrow-right"></i>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        `;
    }
    else
    {
        account.innerHTML = `
            <div class="row">
            <div class="col-12 d-grid">
                <button class="btn btn-dark fs-5 mt-4 mb-4 py-3" onclick="window.location.href = 'login.html'">Sign in</button>
            </div>
        </div>
        `;
    }
}

function closeAccount()
{
    const account = document.getElementById('account-sidebar');
    account.classList.remove('container','d-flex','flex-column','accountSidebar');
    account.innerHTML = "";
}

function logout()
{
    localStorage.removeItem('loginUser')
    alert("Logged out");
    setTimeout(function() {
        window.location.href = "index.html";
    },100);
}