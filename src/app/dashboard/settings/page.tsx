import ChangePasswordForm from "@/components/forms/manage-password/changePassword/ChangePasswordForm";
import EditProfileForm from "@/components/forms/profile/EditProfileForm";
import PageTitleBar from "@/components/pageTitlebar/PageTitieBar";
import SettingsActions from "@/components/pageTitlebar/SettingsActions";
import TabSwitcher from "@/components/TabSwitcher";
import { SETTINGS_TABS } from "@/constants/menu";

const Settings = () => {
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

export default Settings;
