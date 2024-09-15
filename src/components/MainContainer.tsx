import UnitContainer from "./unit/Container"
import MultiContainer from "./multi/Container"

export default ({ tab }: { tab: string }) => {
    return (
        <div className="main-container" >
            {
                tab === "unit" ? (
                    <UnitContainer />
                ) : (
                    <MultiContainer />
                )
            }
        </div>
    )
}