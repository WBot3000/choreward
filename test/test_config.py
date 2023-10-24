import json

file_path = r'backend-config.json'

with open(file_path, 'r') as file:
    config_data = json.load(file)

def test_authentication_config(config):
    # AWS Cognito service
    assert config['auth']['choreward9fd59e50']['service'] == 'Cognito'

    # Verify password policy
    password_policy = config['auth']['choreward9fd59e50']['frontendAuthConfig']['passwordProtectionSettings']
    assert password_policy['passwordPolicyMinLength'] == 8

    # Verify MFA setting
    mfa_config = config['auth']['choreward9fd59e50']['frontendAuthConfig']['mfaConfiguration']
    assert mfa_config == 'OFF'
    mfa_types = config['auth']['choreward9fd59e50']['frontendAuthConfig']['mfaTypes']
    assert 'SMS' in mfa_types

    # Verify registration properties
    signup_attributes = config['auth']['choreward9fd59e50']['frontendAuthConfig']['signupAttributes']
    assert 'EMAIL' in signup_attributes

    # Verify authentication mechanism
    verification_mechanisms = config['auth']['choreward9fd59e50']['frontendAuthConfig']['verificationMechanisms']
    assert 'EMAIL' in verification_mechanisms

    print("pass")


test_authentication_config(config_data)