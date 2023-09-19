---
sidebar_position: 5
---

# How to request access on GLiCID Cluster?

    1. Create an account on https://clam.glicid.fr (school account, or CRU account for external users).
    2. Account validation by an administrator
    3. User sends SSH key to CLAM portal (in profile's SSH Access tab).
    4. SSH key processed by administrator
    5. SSH connection configuration (found in the profile's SSH Access tab):
        - For Linux and MacOS, edit the .ssh/config file and add the following:

        Host Bastion
            Hostname banzai.glicid.fr
            User doe-j
            IdentityFile ~/.ssh/SSH_KEY_GLICID
            ForwardAgent yes

        Host GLiCID
            Hostname login-001.glicid.fr
            User jdoe@mondomaine.org
            ProxyJump Bastion
            IdentityFile ~/.ssh/SSH_KEY_GLICID 

        Attention: The Host Bastion User is the family name separated from the first letter of the first name by a hyphen. This is provisional and will soon be defined in CLAM. The GLiCID Host User is the login you use on CLAM. It is your identifier for the entire GLiCID platform.

        - For Windows, use MobaXTerm. With this tool, you can easily configure the GLiCID host, as well as the Jump proxy to Bastion.

    6. Now that everything's set up, you can log in using the session created in MobaXTerm (Windows), or with the GLiCID ssh command from a terminal (Linux and MacOS).

    Note: Avoid using passwords on the GLiCID platform

## To access the cluster from outside ECN Network.
        - Install ECN VPV