import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import UserList from '../components/UserList';
import { getUsersSagaStart } from '../redux/modules/users';

export default function UserListContainer() {
  const users = useSelector((state) => state.users.data);
  const dispatch = useDispatch();

  // const getUsers = useCallback(async () => {
  //   try {
  //     dispatch(getUsersStart());
  //     const res = await axios.get('https://api.github.com/users');
  //     dispatch(getUsersSuccess(res.data));
  //   } catch (error) {
  //     dispatch(getUsersFail(error));
  //   }
  // }, [dispatch]);

  const getUsers = useCallback(() => {
    dispatch(getUsersSagaStart());
  }, [dispatch]);
  return <UserList users={users} getUsers={getUsers} />;
}
