import React from "react";
import { useUserContext } from "@/contexts";
import { Menu, Button, Portal, Box } from "@chakra-ui/react";
import { HiOutlineLogout, HiOutlineArchive } from "react-icons/hi";
import { useUserMenu } from "./hooks/useUserMenu";

const User: React.FC = () => {
  const { user } = useUserContext();
  const { handleLogout } = useUserMenu();

  return user ? (
    <Menu.Root size="md" positioning={{ placement: "bottom" }}>
      <Menu.Trigger asChild>
        <Button
          variant="ghost"
          color="white"
        >{`Bem vindo, ${user.name}`}</Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            <Menu.Item value="copy">
              <HiOutlineArchive />
              {/* TODO: Implementar */}
              <Box flex="1">Pedidos</Box>
            </Menu.Item>
            <Menu.Item
              value="logout"
              color="fg.error"
              _hover={{ bg: "bg.error", color: "fg.error" }}
              onClick={handleLogout}
            >
              <HiOutlineLogout />
              <Box flex="1">Sair</Box>
            </Menu.Item>
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  ) : null;
};

export default User;
