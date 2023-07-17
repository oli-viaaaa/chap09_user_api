import logo from './logo.svg';
import { AppBar, Toolbar, Typography, Button, Snackbar } from '@mui/material';
// import './App.css';
import UserList from './component/UserList';
import Login from './component/Login';
import { useState } from 'react';

function App() {
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [loggedIdUser, setLoggedInUser] = useState(null);
  // 메세지 내림
  const handleSnackbarClose = () =>{
    setSnackbarOpen(false);
  };
  // Login 컴포넌트에서 로그인에 성공한 후 호출됨.
  const handleLogin = (user) => {
    alert('handleLogin');
    console.log('handleLogin',user);
    setLoggedInUser(user);
    setSnackbarMessage(`${user.name}님 환영합니다.`);
    setSnackbarOpen(true);
  };

  // 로그아웃 함수
  const handleLogout = () => {
    setLoggedInUser(null);
    setSnackbarMessage("로그아웃 되었습니다.");
    setSnackbarOpen(true);
  };

  return (
    <div className="App">
      <AppBar position='static'>
        <Toolbar>
          <Typography variant='h6' style={{flexGrow: 1}}>
            User List
          </Typography>
          {loggedIdUser ? (
            <>
              <Typography variant='h6' style={{marginRight: '10px'}}>{loggedIdUser.name}님
              </Typography>
              <Button color='inherit' onClick={handleLogout}>
                Logout
              </Button>
            </>
          ) : (
            <Login 
              setSnackbarOpen={setSnackbarOpen}
              setSnackbarMessage={setSnackbarMessage}
              onLogin={handleLogin}
            />
          )}
        </Toolbar>
      </AppBar>
      <UserList />
      {/* 메세지(alert)을 띄워주는 역할 open={true} 되면 떠오름 */}
      <Snackbar 
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleSnackbarClose}
        message={snackbarMessage}
      />
    </div>
  );
}

export default App;
