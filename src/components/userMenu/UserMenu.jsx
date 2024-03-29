import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/auth-operations';
import { useAuth } from '../../hooks';
import { Container, Name } from './UserMenu.styled';
import Button from '../Button';

export default function UserMenu() {
  const dispatch = useDispatch();
  const { user } = useAuth();

  const handleLogout = () => {
    dispatch(logOut());
  };

  return (
    <Container>
      <Name>{user.name}</Name>
      <Button type="button" action={handleLogout}>
        Logout
      </Button>
    </Container>
  );
}