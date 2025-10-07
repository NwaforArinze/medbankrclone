import HealthDetectiveCard from "./HealthDetectiveCard";
import HealthVaultCard from "./HealthVaultCard";
import MedicalTrackerCard from "./MedicalTrackerCard";
import SpecialistCard from "./SpecialistCard";
import SymptomsChecker from "./SymptomsChecker";

const Grid = () => {
  return (
    <div className="bg-gradient-to-b from-[#3AE2AD] to-[#173C3D] p-2 border-[#E2E4E9] rounded-[16px]">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
        <HealthVaultCard />
        <SymptomsChecker />
        <MedicalTrackerCard />

        <div className="col-span-1 lg:col-span-2">
          <SpecialistCard />
        </div>
        <HealthDetectiveCard />
      </div>
    </div>
  );
};

export default Grid;
