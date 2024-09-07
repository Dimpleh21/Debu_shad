import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
export function Navbar() {
  return (
    <NavigationMenu>
      <NavigationMenuList className="shadow h-[56px] w-[1600px] flex justify-between bg-black">
        <NavigationMenuItem className="text-white ml-7">
          Debu
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
