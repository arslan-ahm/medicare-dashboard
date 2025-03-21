import ChangePasswordForm from "@/components/forms/manage-password/changePassword/ChangePasswordForm";
import EditProfileForm from "@/components/forms/profile/EditProfileForm";
import PageTitleBar from "@/components/titlebarActions/PageTitieBar";
import SettingsActions from "@/components/titlebarActions/SettingsActions";
import TabSwitcher from "@/components/TabSwitcher";
import { SETTINGS_TABS } from "@/constants/menu";

const Page = () => {
  return (
    <section className="flex flex-col w-full mt-2">
      <PageTitleBar title="Settings">
        <SettingsActions />
      </PageTitleBar>

      <TabSwitcher tabs={SETTINGS_TABS}>
        {{
          profile: <EditProfileForm />,
          password: <ChangePasswordForm />,
        }}
      </TabSwitcher>
    </section>
  );
};

export default Page;
