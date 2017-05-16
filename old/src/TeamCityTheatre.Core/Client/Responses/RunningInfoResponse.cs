namespace TeamCityTheatre.Core.Client.Responses {
  public class RunningInfoResponse {
    public double PercentageComplete { get; set; }
    public double ElapsedSeconds { get; set; }
    public double EstimatedTotalSeconds { get; set; }
    public string CurrentStageText { get; set; }
  }
}